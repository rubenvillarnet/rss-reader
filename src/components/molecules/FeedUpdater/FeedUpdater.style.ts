import styled from "styled-components";

const StyledFeedupdater = styled.div`
  span {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.weight.light};
    cursor: pointer;
  }
`;

export const StyledFeedForm = styled.form`
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  input {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 30rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
    padding: 0.5rem;
    padding-left: 2rem;
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

export default StyledFeedupdater;
