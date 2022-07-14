import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball', 'Demon Slayer']);

  const handleAddCategory = () => {
    setCategories(['Death Note', ...categories]);
    // setCategories(cat => [...cat, 'Death Note']);
  };

  return <>
    {/* Title */}
    <h1>GifExpertApp</h1>

    {/* Input */}

    {/* List of Gifs */}
    <button onClick={ handleAddCategory }>Add</button>
    <ol>
      {categories.map(category => (
        <li key={ category }>{ category }</li>
      ))}
    </ol>
      {/* Gif item * n */}
  </>;
};