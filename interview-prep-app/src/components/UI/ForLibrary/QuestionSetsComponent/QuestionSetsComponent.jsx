import React, { useState, useEffect } from 'react';
import styles from './QuestionSetsComponent.module.css';
import SearchComponent from '../../SearchComponent/SearchComponent';
import QuestionSetComponent from '../../QuestionSetComponent/QuestionSetComponent';

const QuestionSetsComponent = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [questionSets, setQuestionSets] = useState([]); // Ініціалізація як порожній масив
  const [loadedSets, setLoadedSets] = useState(6);

  // Використання useEffect для ініціалізації questionSets
  useEffect(() => {
    setQuestionSets(
      Array.from({ length: 6 }, (_, index) => ({
        id: index,
        questionsCount: 10,
        categories: ['Category 1', 'Category 2'],
        username: 'User ' + (index + 1),
        date: '2024-10-19',
        level: 'Easy',
        isLiked: index % 2 === 0,
        visibility: index % 2 === 0 ? 'public' : 'private',
      }))
    );
  }, []);

  const handleFilterOpen = () => {
    setShowFilterModal(true); // Відкрити модальне вікно фільтру
  };

  const handleFilterClose = () => {
    setShowFilterModal(false); // Закрити модальне вікно фільтру
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value); // Вибір опції сортування
  };

  const loadMoreSets = () => {
    const newSets = Array.from({ length: 6 }, (_, index) => ({
      id: loadedSets + index,
      questionsCount: 10,
      categories: ['Category 1', 'Category 2'],
      username: 'User ' + (loadedSets + index + 1),
      date: '2024-10-19',
      level: 'Easy',
      isLiked: (loadedSets + index) % 2 === 0,
      visibility: (loadedSets + index) % 2 === 0 ? 'public' : 'private',
    }));

    setQuestionSets([...questionSets, ...newSets]);
    setLoadedSets(loadedSets + 6); // Збільшення кількості завантажених сетів
  };

  return (
    <div className={styles.questionSetsWrapper}>
      <div className={styles.topRow}>
        {/* Випадаючий список сортування */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className={styles.sortDropdown}
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
        </select>

        {/* Кнопка фільтра */}
        <button className={styles.filterButton} onClick={handleFilterOpen}>
          Filter
        </button>

        {/* Пошук справа */}
        <SearchComponent className={styles.searchComponent} />
      </div>

      {/* Сети питань 
      <div className={styles.questionSetsGrid}>
        {console.log(questionSets)}
        {questionSets.slice(0, loadedSets).map((set, index) => (
          <QuestionSetComponent key={set.id} questionSet={set} />
        ))}
      </div>*/}

      {/* Кнопка "Load more" */}
      <button className={styles.loadMoreButton} onClick={loadMoreSets}>
        Load more
      </button>

      {/* Модальне вікно фільтра */}
      {showFilterModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.filterModal}>
            <h2>Filter Options</h2>

            {/* Фільтр по категоріям */}
            <div className={styles.filterSection}>
              <h3>Category</h3>
              <label>
                <input type="checkbox" value="category1" />
                Category 1
              </label>
              <label>
                <input type="checkbox" value="category2" />
                Category 2
              </label>
              <label>
                <input type="checkbox" value="category3" />
                Category 3
              </label>
            </div>

            {/* Фільтр по рівню */}
            <div className={styles.filterSection}>
              <h3>Level</h3>
              <select>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Фільтр по статусу публікації */}
            <div className={styles.filterSection}>
              <h3>Status</h3>
              <label>
                <input type="radio" name="status" value="public" />
                Public
              </label>
              <label>
                <input type="radio" name="status" value="private" />
                Private
              </label>
            </div>

            <button className={styles.applyButton} onClick={handleFilterClose}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionSetsComponent;
