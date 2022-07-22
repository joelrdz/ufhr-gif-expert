import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNewGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setLoading(false);
  };

  useEffect(() => {
    getNewGifs();

    // getGifs(category)
    //   .then(response => {
    //     setGifs(response);
    //     setLoading(false);
    //   });
  }, []);

  return {
    gifs,
    loading
  };
};