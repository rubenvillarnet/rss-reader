import styled from "styled-components";

const StyledArticle = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fonts.l};
    font-weight: ${({ theme }) => theme.weight.medium};
    a {
      color: inherit;
    }
  }
`;

export default StyledArticle;
