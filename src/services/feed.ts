import { axiosClient } from "./base";

import { Feed } from "interfaces/feed";
import { GetfeedResponse } from "interfaces/services";

import { feedParser } from "utils/feedParser";
import { BASE_URL } from "constants/services";

export const getFeed = async (feedURL: string): Promise<Feed> => {
  try {
    console.log(axiosClient.defaults);
    const response = await axiosClient.get<GetfeedResponse>(BASE_URL + feedURL);
    return feedParser(response.data);
  } catch (error) {
    // TODO: better error handling
    console.log(error);
    throw error;
  }
};
