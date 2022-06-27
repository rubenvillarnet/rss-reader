import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import dompurify from "dompurify";
import { DEFAULT_FEED } from "constants/services";
import { Feed, Item } from "interfaces/feed";
import { getFeed } from "services/feed";

const url = DEFAULT_FEED;

interface DetailProps {
  feed: Feed | null;
}

const Detail = ({ feed }: DetailProps) => {
  const { id } = useParams();
  const item = id ? feed?.items[parseInt(id)] : {};
  return (
    <div>
      <h3>{item?.title}</h3>
      <Link to="/">Back</Link>
      {item?.isHTML && item?.fullDescription ? (
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(item.fullDescription) }} />
      ) : (
        <p>{item?.fullDescription}</p>
      )}
    </div>
  );
};

function App() {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeedData = async () => {
      setIsLoading(true);
      try {
        const response = await getFeed(url);
        setFeed(response);
      } catch (error) {
        // TODO: error handling in front
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeedData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>RSS Reader</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : feed?.items ? (
                feed.items.map((item: Item, idx: number) => (
                  <article key={`article-${idx}`}>
                    {item.title ? <h3>{item.title}</h3> : null}
                    {item.description ? <p>{item.description}</p> : null}
                    {item.image ? <img src={item.image.src} alt={item.image.alt} /> : null}
                    <br />
                    <Link to={`/${idx}`}>Details</Link>
                  </article>
                ))
              ) : (
                <p>There are no items</p>
              )}
            </div>
          }
        />
        <Route path=":id" element={<Detail feed={feed} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
