import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quote, setQuote] = useState({ text: null, author: null });
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    const apiUrl = "https://dummyjson.com/quotes/random";
    const response = await fetch(apiUrl);
    const data = await response.json();
    setQuote({ text: data.quote, author: data.author });
    setLoading(false);
    setHasFetched(true);
  };

  useEffect(() => {
    getQuote();
  }, [hasFetched]);

  return (
    <div className="App">
      {loading ? (
        <Loader visible={true} />
      ) : (
        <QuoteCard text={quote.text} author={quote.author} />
      )}
      <div className="button-container">
        <button className="unselectable" onClick={getQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
