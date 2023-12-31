import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin',
        params: {
          max_articles: '10',
          last_n_hours: '48',
          top_n_keywords: '10'
        },
        headers: {
          'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
      };
  
      try {
        setLoading(true)
        const response = await axios.request(options);
        // console.log(response.data.articles);
        setArticles(response.data.articles)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
        // console.log("finally")
      }
    };
  
    fetchData();
  }, []);

    const first7Articles = articles?.slice(0,7)
    return (
      <>
        <div className="news-feed">
          {loading ? <Spinner /> : null}
          
            <h2>NewsFeed</h2>
            {first7Articles?.map((article, _index) => (
              <div key={_index}>
                <a href={article.url} target="_blank" rel="noreferrer">
                  <p key={article.index}>{article.title}</p>
                </a>
              </div>))}
          
        </div>
      </>
    );
  }
  
  export default NewsFeed;