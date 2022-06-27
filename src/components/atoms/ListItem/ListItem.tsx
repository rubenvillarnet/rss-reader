import { Item } from "interfaces/feed";
import StyledListItem from "./ListItem.style";
import { Link } from "react-router-dom";

interface ListItemProps {
  item: Item;
}

export default function ListItem({ item }: ListItemProps) {
  const { title, description, uuid, image, link } = item;
  return (
    <StyledListItem>
      <div className="content">
        {title ? (
          <h3>
            {link ? (
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        ) : null}
        {description ? <p className="article-description">{description}</p> : null}
        <Link to={`/${uuid}`} className="detail-link">
          More
        </Link>
      </div>
      <div className="image-container">{image ? <img src={image.src} alt={image.alt} /> : null}</div>
    </StyledListItem>
  );
}
