import { v4 as uuidv4 } from "uuid";

import { Feed, Item } from "interfaces/feed";
import { GetfeedResponse } from "interfaces/services";

export const feedParser = (feedResponse: GetfeedResponse): Feed => {
  const parser = new DOMParser();
  const { feed, items } = feedResponse;
  const parsedFeed: Feed = {
    channel: {
      title: feed.title,
      link: feed.link,
      description: feed.description
    },
    items: items.map((item: { [key: string]: string }) => {
      const parsedDescription = parser.parseFromString(item.description, "text/html");
      const isHTML = Array.from(parsedDescription.body.childNodes).some((node) => node.nodeType === 1);
      const parsedItem: Item = {
        uuid: uuidv4(),
        title: item.title,
        link: item.link,
        author: item.author,
        fullDescription: item.description,
        isHTML
      };
      if (isHTML) {
        const paragraphs = parsedDescription.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
          const content = paragraphs[i].textContent;
          if (typeof content === "string" && content.trim().length) {
            parsedItem.description = content;
            break;
          }
        }
        const images = parsedDescription.images;
        if (images.length) {
          parsedItem.image = {
            src: images[0].src,
            alt: images[0].alt
          };
        }
      } else {
        parsedItem.description = item.description;
      }

      return parsedItem;
    })
  };
  return parsedFeed;
};
