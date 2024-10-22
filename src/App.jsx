import Loader from "./components/Loader";
import QuoteCard from "./components/QuoteCard";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, isLoading, error, triggerReload } = useFetch('https://dummyjson.com/quotes/random');

  const tweet = () => {
    const tweet = `${data.quote} - ${data.author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(tweetUrl, "_blank");
  }

  if (isLoading) return <Loader visible={true} />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      {data && 
        <QuoteCard
          text={data.quote}
          author={data.author}
          getQuote={triggerReload}
          tweetQuote={tweet}
        />
      }
    </>
  );
}

export default App;
