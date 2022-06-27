export interface Item {
  uuid: string;
  title?: string;
  link?: string;
  author?: string;
  pubDate?: string;
  fullDescription?: string;
  isHTML?: boolean;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface Channel {
  title: string;
  link: string;
  description: string;
}

export interface Feed {
  channel: Channel;
  items: Item[];
}
