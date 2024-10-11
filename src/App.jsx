import { useEffect, useState } from "react";
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

  const tweetQuote = () => {
    const tweet = `${quote.text} - ${quote.author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(tweetUrl, "_blank");
  }

  useEffect(() => {
    getQuote();
  }, [hasFetched]);

  return (
    <>
      {loading ? (
        <Loader visible={true} />
      ) : (
        <QuoteCard
          text={quote.text}
          author={quote.author}
          getQuote={getQuote}
          tweetQuote={tweetQuote}
        />
      )}
    </>
  );
}

export default App;
