import { ReactNode } from "react";
import StyledButton from "./Button.styled";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  style?: "danger" | undefined;
}

export default function Button({ children, onClick, type, style }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type} buttonStyle={style}>
      {children}
    </StyledButton>
  );
}
