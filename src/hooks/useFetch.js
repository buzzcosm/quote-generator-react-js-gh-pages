import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const triggerReload = () => {
    setReloadTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    setIsLoading(true); // Start loading whenever URL or trigger changes
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });

  }, [url, reloadTrigger]);

  return { data, isLoading, error, triggerReload };
};

export default useFetch;