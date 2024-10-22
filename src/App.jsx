import Loader from "./components/Loader";
import QuoteCard from "./components/QuoteCard";
import useFetch from "./hooks/useFetch";

function App() {
  const apiUrl = 'https://dummyjson.com/quotes/random';
  const { data: quoteData, isLoading, error, triggerReload } = useFetch(apiUrl);
  const { quote, author } = quoteData || {}; 


  const tweet = () => {
    const text = `${quote} - ${author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(tweetUrl, "_blank");
  }

  if (isLoading) return <Loader visible={true} />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      {quoteData && 
        <QuoteCard
          text={quote}
          author={author}
          getQuote={triggerReload}
          tweetQuote={tweet}
        />
      }
    </>
  );
}

export default App;
