import { useEffect, useState } from "react";
import { DEFAULT_FEED } from "constants/services";
import { Item } from "interfaces/feed";
import { getFeed } from "services/feed";
import StyledHome from "./Home.styled";
import ListItem from "components/atoms/ListItem/ListItem";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { addFeed } from "redux/feedSlice";
import Search from "components/atoms/Search/Search";

const url = DEFAULT_FEED;

export default function Home() {
  const [filteredItems, setFilteredItems] = useState<Item[] | null>(null);
  const feed = useAppSelector((state) => state.feed);
  const { channel, items } = feed || {};
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (query: string | null) => {
    if (query) {
      const filteredResult = items?.filter((item) => item.title?.toLowerCase().includes(query.toLowerCase()));
      setFilteredItems(filteredResult || null);
    } else {
      setFilteredItems(items);
    }
  };

  useEffect(() => {
    const fetchFeedData = async () => {
      setIsLoading(true);
      try {
        const response = await getFeed(url);
        dispatch(addFeed(response));
        setFilteredItems(response.items);
      } catch (error) {
        // TODO: error handling in front
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!channel) {
      fetchFeedData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <span className="items-count">{filteredItems?.length} items</span>
            </h2>

            <p>{channel?.description}</p>
          </div>
          {items?.length ? <Search handleSearch={handleSearch} /> : null}
          {filteredItems && filteredItems.length ? (
            filteredItems.map((item: Item) => <ListItem key={item.uuid} item={item} />)
          ) : (
            <p>There are no items</p>
          )}
        </>
      )}
    </StyledHome>
  );
}
