import React, { useState, useEffect } from 'react';
import styles from './FilterCategoryLevel.module.css'; // Імпортуйте CSS файл для стилізації

const FilterCategoryLevel = ({
  categories,
  levels,
  onApply,
  selectedCategories,
  selectedLevels,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localSelectedCategories, setLocalSelectedCategories] = useState([]);
  const [localSelectedLevels, setLocalSelectedLevels] = useState([]);

  // Використання useEffect для ініціалізації вибраних категорій та рівнів з пропсів
  useEffect(() => {
    setLocalSelectedCategories(selectedCategories);
    setLocalSelectedLevels(selectedLevels);
  }, [selectedCategories, selectedLevels]); // Викликаємо, коли пропси змінюються

  const toggleCategory = (category) => {
    setLocalSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleLevel = (level) => {
    setLocalSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleApply = () => {
    onApply(localSelectedCategories, localSelectedLevels);
    setIsModalOpen(false); // Закриваємо модальне вікно після застосування фільтрів
  };

  const handleClose = () => {
    setLocalSelectedCategories(selectedCategories);
    setLocalSelectedLevels(selectedLevels);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.filterButton} onClick={() => setIsModalOpen(true)}>
        Filter
        {/* Ваше зображення для фільтра */}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Filter</h2>

            <div>
              <h3>Category:</h3>
              {categories.map((category) => (
                <div key={category}>
                  <input
                    type="checkbox"
                    checked={localSelectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  {category}
                </div>
              ))}
            </div>

            <div>
              <h3>Level:</h3>
              {levels.map((level) => (
                <div key={level}>
                  <input
                    type="checkbox"
                    checked={localSelectedLevels.includes(level)}
                    onChange={() => toggleLevel(level)}
                  />
                  {level}
                </div>
              ))}
            </div>

            <div className={styles.modalActions}>
              <button onClick={handleApply}>Apply</button>
              <button onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCategoryLevel;
