import { useAppSelector } from "hooks/redux";
import { useParams, Link } from "react-router-dom";
import dompurify from "dompurify";

import StyledArticle from "./Article.styled";
import { showDate } from "utils/dates";

export default function Article() {
  const { uuid } = useParams();
  const article = useAppSelector((state) => state.feed.items?.find((item) => item.uuid === uuid));
  const { title, isHTML, fullDescription, link, author, pubDate } = article || {};
  return (
    <StyledArticle>
      <Link to="/">Back to list</Link>
      <h3>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div className="metadata">
        {author ? <p className="author">By {author}</p> : null}
        {pubDate ? <p className="date">{showDate(pubDate)}</p> : null}
      </div>
      {isHTML && fullDescription ? (
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(fullDescription) }} />
      ) : (
        <p>{fullDescription}</p>
      )}
    </StyledArticle>
  );
}
