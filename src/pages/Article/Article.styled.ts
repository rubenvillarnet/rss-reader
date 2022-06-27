import styled from "styled-components";

const StyledArticle = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fonts.l};
    font-weight: ${({ theme }) => theme.weight.medium};
    a {
      color: inherit;
    }
  }
  .metadata {
    display: flex;
    justify-content: space-between;
    .author {
      font-weight: ${({ theme }) => theme.weight.medium};
    }
    .date {
      font-weight: ${({ theme }) => theme.weight.light};
    }
  }
`;

export default StyledArticle;
