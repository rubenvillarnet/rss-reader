import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import dompurify from "dompurify";
import { Feed } from "interfaces/feed";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "components/atoms/Layout/Layout";
import Home from "pages/Home/Home";

interface DetailProps {
  feed: Feed | null;
}

const Detail = ({ feed }: DetailProps) => {
  const { id } = useParams();
  const item = id ? feed?.items[parseInt(id)] : {};
  return null;
  /* return (
    <div>
      <h3>{item?.title}</h3>
      <Link to="/">Back</Link>
      {item?.isHTML && item?.fullDescription ? (
        <div dangerouslySetInnerHTML={{ __html: dompurify.sanitize(item.fullDescription) }} />
      ) : (
        <p>{item?.fullDescription}</p>
      )}
    </div>
  ); */
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<Detail feed={null} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
