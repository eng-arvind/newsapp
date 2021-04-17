import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import NewsContent from './Content/NewsContent';
import axios from 'axios'
import Footer from './component/Footer';
function App() {
  const [category, setCategory] = useState('general');
  const [newslist, setnewslist] = useState([])
  const [newsresult, setnewsresult] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsapi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=5974669a2b58474e9714dde3e18c1007&pageSize=${loadmore}&category=${category}`)

      setnewslist(news.data.articles)
      setnewsresult(news.data.totalResults)
    }
    catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    newsapi();
    // eslint-disable-next-line
  }, [newsresult, category, loadmore])


  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newslist={newslist} newsresult={newsresult} />
      <Footer />
    </div>
  );
}

export default App;
