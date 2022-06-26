import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link
} from "react-router-dom";
import dompurify from 'dompurify';


const rssParser = "https://api.rss2json.com/v1/api.json?rss_url="
const url = "https://www.xatakandroid.com/tag/feeds/rss2.xml";

const Detail = ({feed}) => {
const params = useParams();
const item = feed?.items[params.id];
 return <div>
 <h3>{item?.title}</h3>
 <Link to="/">Back</Link>
 {item.isHTML ? <div dangerouslySetInnerHTML={{__html: dompurify.sanitize(item.fullDescription)}} /> : <p>{item.fullDescription}</p>}

</div>
}

function App() {
  const [feed, setFeed] = useState(null);
  
  useEffect(() => {
    axios.get(rssParser+url)
    .then(response => {
      const { feed, items } = response.data;
      const parser = new DOMParser();
      const parsedFeed = {
        channel: {
          title: feed.title,
          link: feed.link,
          description: feed.description
        },
        items: items.map((item) => {
          const parsedDescription = parser.parseFromString(item.description, "text/html");
          const isHTML =  Array.from(parsedDescription.body.childNodes).some(node => node.nodeType === 1);
          const parsedItem = {
            title: item.title,
            link: item.link,
            author: item.author,
            fullDescription: item.description,
            isHTML
          }
          if(isHTML) {
            const paragraphs = parsedDescription.getElementsByTagName('p');
            for (let i = 0; i < paragraphs.length; i++) {
              const content = paragraphs[i].textContent
              if(typeof content === "string" && content.trim().length) {
                parsedItem.description = content
                break
              }
            }
            const images = parsedDescription.images;
            if(images.length) {
              parsedItem.image = {
                src: images[0].src,
                alt: images[0].alt
              }
            } 
          } else {
            parsedItem.description = item.description;
          }
          
          return parsedItem;
        })
      }
      console.log(parsedFeed)
      setFeed(parsedFeed);
    })
   
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
         <div>
         <h1>RSS Reader</h1>
         {feed?.items ? feed.items.map((item, idx) => <article key={`article-${idx}`}>
          {item.title ? <h3>{item.title}</h3> : null}
           {item.description ? <p>{item.description}</p> : null}
           {item.image ? <img src={item.image.src} alt={item.image.alt}/>: null}
           <br/>
           <Link to={`/${idx}`}>Details</Link>
         </article>): <p>Loading...</p>}
       </div>
      }/>
      <Route path=":id" element={
        <Detail feed={feed}/>
      }/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
