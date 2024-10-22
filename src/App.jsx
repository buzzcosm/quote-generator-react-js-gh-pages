import { Loader } from "./components/Loader";
import { QuoteCard } from "./components/QuoteCard";
import { useQuote } from "./hooks/useQuote";
import { tweet } from "./services/tweet";

const App = () => {
  const { quote, isLoading, error, getNewQuote } = useQuote();
  const { text, author } = quote || {};
  const tweetQuote = () => tweet(`${text} - ${author}`);

  if (isLoading) return <Loader visible={true} />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      {quote && (
        <QuoteCard
          text={text}
          author={author}
          getQuote={getNewQuote}
          tweetQuote={tweetQuote}
        />
      )}
    </>
  );
};

export default App;
