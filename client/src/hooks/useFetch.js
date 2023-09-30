import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = () => {
      setIsLoading(true);
      setError(null);

      fetch(url, { signal: abortController.signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          
          return response.json();
        })
        .then((responseData) => {
          setData(responseData);
          
       
        })
        .catch((err) => {
          setError(err.message || "An error occurred.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [ url]);

  return { data, setData, isLoading, error };

}
export default useFetch