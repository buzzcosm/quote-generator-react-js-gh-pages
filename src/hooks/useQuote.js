import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/quotes/random";

export const useQuote = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const getNewQuote = () => {
    setReloadTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        const newQuote = {
          text: data.quote,
          author: data.author,
        };
        setQuote(newQuote);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [reloadTrigger]);

  return { quote, isLoading, error, getNewQuote };
};
