export interface GetfeedResponse {
  status: string;
  feed: {
    [key: string]: string;
  };
  items: Array<{
    [key: string]: string;
  }>;
}
