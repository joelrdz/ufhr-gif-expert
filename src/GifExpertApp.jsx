import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball', 'Demon Slayer']);

  return <>
    {/* Title */}
    <h1>GifExpertApp</h1>

    {/* Input */}

    {/* List of Gifs */}
    <ol>
      {categories.map(category => (
        <li key={ category }>{ category }</li>
      ))}
    </ol>
      {/* Gif item * n */}
  </>;
};