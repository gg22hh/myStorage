import { useState, useEffect } from 'react';

const useGetData = (url: string) => {
  const [data, setData] = useState<null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};

export default useGetData;