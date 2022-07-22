import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const handleAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories]);
    // setCategories(c => [...c, newCategory]);
  };

  return <>
    <h1>GifExpertApp</h1>

    <AddCategory
      // setCategories={ setCategories }
      onNewCategory={ handleAddCategory }
    />

    {categories.map(category => (
      <GifGrid
        key={ category }
        category={ category }
      />
    ))}
  </>;
};