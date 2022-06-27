import { useEffect, useState } from "react";
import { DEFAULT_FEED } from "constants/services";
import { Feed, Item } from "interfaces/feed";
import { getFeed } from "services/feed";
import StyledHome from "./Home.styled";
import ListItem from "components/atoms/ListItem/ListItem";

const url = DEFAULT_FEED;

export default function Home() {
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
    <StyledHome>
      <h1>RSSly</h1>
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <div className="feed-info">
            <h2>
              {feed?.channel.link ? (
                <a href={feed?.channel.link} target="_blank" rel="noreferrer">
                  {feed?.channel.title}
                </a>
              ) : (
                feed?.channel.title
              )}{" "}
              <span className="items-count">{feed?.items.length} items</span>
            </h2>

            <p>{feed?.channel.description}</p>
          </div>
          {feed?.items ? (
            feed.items.map((item: Item) => <ListItem key={item.uuid} item={item} />)
          ) : (
            <p>There are no items</p>
          )}
        </>
      )}
    </StyledHome>
  );
}
