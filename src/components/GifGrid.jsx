import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

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
      <div className="card-grid">
        {gifs.map(gif => (
          <GifItem
            key={ gif.id }
            { ...gif }
          />
        ))}
      </div>
    </>
  );
};