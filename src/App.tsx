import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "components/atoms/Layout/Layout";
import Home from "pages/Home/Home";
import Article from "pages/Article/Article";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":uuid" element={<Article />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
