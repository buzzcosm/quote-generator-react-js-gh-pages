import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadTrigger, setReloadTrigger] = useState(0); // Added trigger state

  // Function to trigger reload
  const triggerReload = () => {
    setReloadTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    setIsLoading(true); // Start loading whenever URL or trigger changes

    // Fetch data
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

  }, [url, reloadTrigger]); // Re-run fetch when URL or trigger changes

  return { data, isLoading, error, triggerReload };
};

export default useFetch;

// import { useState, useEffect, useRef } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fetched = useRef(false); // Track if the data has been fetched already
//   const [reloadTrigger, setReloadTrigger] = useState(0); // Added trigger state

//   // Function to trigger reload
//   const triggerReload = () => {
//     setReloadTrigger((prev) => prev + 1);
//   };

//   useEffect(() => {
//     if (fetched.current) return; // Skip if already fetched
//     fetched.current = true;

//     // Fetch data
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           // error coming back from server
//           throw Error("could not fetch the data for that resource");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setIsLoading(false);
//         setData(data);
//         setError(null);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err.message);
//       });
//   }, [url, reloadTrigger]); // Return the triggerReload function

//   return { data, isLoading, error, triggerReload };
// };

// export default useFetch;
