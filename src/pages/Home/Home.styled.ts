import styled from "styled-components";

const StyledHome = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.fonts.xxl};
      font-weight: ${({ theme }) => theme.weight.bold};
    }
  }
  .feed-info {
    position: relative;
    margin-bottom: 3rem;
    &: after {
      position: absolute;
      content: "";
      bottom: -1rem;
      width: 20%;
      height: 0.25rem;
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    h2 {
      font-size: ${({ theme }) => theme.fonts.xl};
      font-weight: ${({ theme }) => theme.weight.medium};
    }
    a {
      color: inherit;
    }
    .items-count {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: ${({ theme }) => theme.fonts.m};
      font-weight: ${({ theme }) => theme.weight.light};
      position: relative;
      top: -0.5rem;
    }
  }
`;

export default StyledHome;
