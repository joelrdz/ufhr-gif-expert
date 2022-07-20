import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories(c => [inputValue, ...c]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Search gifs:"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  );
};