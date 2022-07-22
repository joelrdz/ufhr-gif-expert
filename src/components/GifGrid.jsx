import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      { loading && <p>Loading...</p> }
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