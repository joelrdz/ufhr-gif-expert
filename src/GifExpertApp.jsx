import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball', 'Demon Slayer']);

  const handleAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories]);
    // setCategories(c => [...c, newCategory]);
  };

  return <>
    {/* Title */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory
      // setCategories={ setCategories }
      onNewCategory={ handleAddCategory }
    />

    {/* List of Gifs */}

    <ol>
      {categories.map(category => (
        <li key={ category }>{ category }</li>
      ))}
    </ol>
      {/* Gif item * n */}
  </>;
};