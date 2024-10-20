import React, { useState, useEffect } from 'react';
import styles from './FilterCategoryLevel.module.css';

const FilterCategoryLevel = ({ filters, onApply, selectedFilters }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localSelectedFilters, setLocalSelectedFilters] = useState({});

  useEffect(() => {
    const initialFilters = {};
    filters.forEach((filter) => {
      initialFilters[filter.name] = Array.isArray(selectedFilters[filter.name])
        ? selectedFilters[filter.name]
        : []; // Гарантуємо, що це масив
    });
    setLocalSelectedFilters(initialFilters);
  }, [filters, selectedFilters]);

  const toggleFilter = (filterName, value) => {
    setLocalSelectedFilters((prev) => {
      const currentValues = prev[filterName] || []; // Гарантуємо, що це масив
      return {
        ...prev,
        [filterName]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };

  const handleApply = () => {
    const filtersToApply = {
      categories: Array.isArray(localSelectedFilters.categories)
        ? localSelectedFilters.categories
        : [],
      levels: Array.isArray(localSelectedFilters.levels)
        ? localSelectedFilters.levels
        : [],
      visibility: Array.isArray(localSelectedFilters.visibility)
        ? localSelectedFilters.visibility
        : [],
    };
    onApply(filtersToApply);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    const initialFilters = {};
    filters.forEach((filter) => {
      initialFilters[filter.name] = selectedFilters[filter.name] || []; // Гарантуємо, що це масив
    });
    setLocalSelectedFilters(initialFilters);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.filterButton} onClick={() => setIsModalOpen(true)}>
        Filter
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Filter</h2>
            {filters.map((filter) => (
              <div key={filter.name}>
                <h3>{filter.label}:</h3>
                {filter.options.map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      checked={
                        localSelectedFilters[filter.name]?.includes(option) ||
                        false
                      }
                      onChange={() => toggleFilter(filter.name, option)}
                    />
                    {option}
                  </div>
                ))}
              </div>
            ))}

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
