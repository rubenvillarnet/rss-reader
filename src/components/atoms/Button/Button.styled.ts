import styled from "styled-components";

interface ButtonProps {
  buttonStyle?: "danger" | undefined;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, buttonStyle }) => {
    if (buttonStyle === "danger") {
      return theme.colors.danger;
    }
    return theme.colors.primary;
  }};
  border: none;
  color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default StyledButton;
