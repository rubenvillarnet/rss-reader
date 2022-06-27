import styled from "styled-components";

const StyledSearch = styled.form`
  display: flex;
  .input-container {
    position: relative;
    flex: 1;
    margin-right: 1rem;
    display: flex;
    input {
      flex: 1;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 0.5rem;
      padding: 0.5rem;
      padding-left: 2rem;
    }
    .search {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
    }
    .clear {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      cursor: pointer;
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: ${({ theme }) => theme.colors.background};
    border-radius: 0.5rem;
    padding: 0 1rem;
    cursor: pointer;
  }
`;

export default StyledSearch;
