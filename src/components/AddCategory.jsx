import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setCategories(c => [inputValue, ...c]);
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