import { ReactNode } from "react";
import StyledLayout from "./Layout.style";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <div className="content">{children}</div>
    </StyledLayout>
  );
}
