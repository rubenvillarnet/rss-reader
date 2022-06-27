import { Channel, Item } from "./feed";

export interface FeedState {
  channel: Channel | null;
  items: Item[] | null;
}
