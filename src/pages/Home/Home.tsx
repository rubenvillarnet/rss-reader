import { useEffect, useState } from "react";
import { DEFAULT_FEED } from "constants/services";
import { Item } from "interfaces/feed";
import { getFeed } from "services/feed";
import StyledHome from "./Home.styled";
import ListItem from "components/atoms/ListItem/ListItem";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { addFeed } from "redux/feedSlice";

const url = DEFAULT_FEED;

export default function Home() {
  const feed = useAppSelector((state) => state.feed);
  const { channel, items } = feed || {};
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeedData = async () => {
      setIsLoading(true);
      try {
        const response = await getFeed(url);
        dispatch(addFeed(response));
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
              {channel?.link ? (
                <a href={channel?.link} target="_blank" rel="noreferrer">
                  {channel?.title}
                </a>
              ) : (
                channel?.title
              )}{" "}
              <span className="items-count">{items?.length} items</span>
            </h2>

            <p>{channel?.description}</p>
          </div>
          {items ? items.map((item: Item) => <ListItem key={item.uuid} item={item} />) : <p>There are no items</p>}
        </>
      )}
    </StyledHome>
  );
}
