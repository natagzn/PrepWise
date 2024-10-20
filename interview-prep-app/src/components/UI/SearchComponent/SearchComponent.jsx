import React, { useRef, useState } from 'react';
import styles from './SearchComponent.module.css'; // Використовуємо `styles` для правильного імпорту

const SearchComponent = ({ placeholder, onClick }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles['search-box']}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={inputValue ? '' : placeholder}
        className={styles['search-input']}
      />
      <div
        className={styles['search-icon']}
        onClick={() => onClick(inputValue)}
      ></div>
    </div>
  );
};

export default SearchComponent;
