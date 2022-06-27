import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
    fonts: {
      xl: string;
      l: string;
      m: string;
    };
    weight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
