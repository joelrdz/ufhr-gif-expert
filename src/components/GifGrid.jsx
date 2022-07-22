import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  // const getInitialGifs = async () => {
  //   const initialGifs = await getGifs(category);
  //   setGifs(initialGifs);
  // };

  useEffect(() => {
    getGifs(category)
      .then(setGifs);

    // getInitialGifs();
  }, []);

  return (
    <>
      <h3>{ category }</h3>
      <ol>
        {gifs.map(({ id, title }) => (
          <li key={ id }>{ title }</li>
        ))}
      </ol>
    </>
  );
};