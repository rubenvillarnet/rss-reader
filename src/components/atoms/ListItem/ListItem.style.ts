import styled from "styled-components";

const StyledListItem = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding-bottom: 1rem;
  padding-top: 1.5rem;
  &:last-child {
    border-bottom: none;
  }
  h3 {
    font-size: ${({ theme }) => theme.fonts.l};
    font-weight: ${({ theme }) => theme.weight.medium};
    margin: 0;
    a {
      color: inherit;
    }
  }
  .article-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .detail-link {
    display: block;
    text-align: right;
    margin-bottom: 1rem;
  }
  @media (min-width: 48rem) {
    display: flex;
    flex-direction: row-reverse;
    .image-container {
      min-width: 33%;
      max-width: 33%;
      margin-right: 2rem;
    }
    .content {
      flex-grow: 1;
    }
  }
`;

export default StyledListItem;
