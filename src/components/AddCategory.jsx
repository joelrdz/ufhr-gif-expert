import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
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