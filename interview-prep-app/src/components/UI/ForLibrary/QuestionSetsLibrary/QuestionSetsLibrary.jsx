import React, { useState, useEffect } from 'react';
import styles from './QuestionSetsLibrary.module.css';
import QuestionSetComponent from '../../QuestionSetComponent/QuestionSetComponent';
import SortComponent from '../../SortComponent/SortComponent';
import FilterCategoryLevel from '../../FilterCategoryLevel/FilterCategoryLevel';

import SearchComponent from '../../SearchComponent/SearchComponent';

const QuestionSetsLibrary = () => {
  const [questionSets, setQuestionSets] = useState([]); // Ініціалізація як порожній масив
  const [loadedSets, setLoadedSets] = useState(6);

  const sortingOptions = [
    { label: 'Created (new -> old)', value: 'createdDesc' },
    { label: 'Created (old -> new)', value: 'createdAsc' },
    { label: 'Name (A -> Z)', value: 'nameAsc' },
    { label: 'Name (Z -> A)', value: 'nameDesc' },
  ];

  const handleSortChange = (value) => {
    console.log('Sorting by:', value);
    // Додайте вашу логіку для зміни сортування
  };

  // Використання useEffect для ініціалізації questionSets
  useEffect(() => {
    setQuestionSets(
      Array.from({ length: 6 }, (_, index) => ({
        id: index,
        questionsCount: 10,
        categories: ['Category 1', 'Category 2'],
        username: 'annanahalka',
        date: '2024-10-19',
        level: 'Easy',
        isLiked: index % 2 === 0,
        visibility: index % 2 === 0 ? 'public' : 'private',
      }))
    );
  }, []);

  const categories = ['Development', 'Design', 'Marketing', 'Sales', 'Finance'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  // Стан для зберігання вибраних фільтрів
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredLevels, setFilteredLevels] = useState([]);

  const handleApplyFilters = (categories, levels) => {
    setFilteredCategories(categories);
    setFilteredLevels(levels);
    console.log('Selected Categories:', categories);
    console.log('Selected Levels:', levels);
  };

  return (
    <div className={styles.questionSetsWrapper}>
      <div className={styles.filterSortWrapper}>
        <div className={styles.leftGroup}>
          <div className={styles.sortComponent}>
            <SortComponent
              sortingOptions={sortingOptions}
              onSortChange={handleSortChange}
            />
          </div>
          <div className={styles.filterComponent}>
            <FilterCategoryLevel
              categories={categories}
              levels={levels}
              onApply={handleApplyFilters}
              selectedCategories={filteredCategories} // Передача вибраних категорій
              selectedLevels={filteredLevels} // Передача вибраних рівнів
            />
          </div>
        </div>
        <div className={styles.search}>
          <SearchComponent placeholder="Search your sets" />
        </div>
      </div>

      {/* Сети питань */}
      <div className={styles.questionSetsGrid}>
        {questionSets.slice(0, loadedSets).map((set) => (
          <div key={set.id}>
            <QuestionSetComponent
              questionsCount={set.questionsCount}
              categories={set.categories}
              username={set.username}
              date={set.date}
              level={set.level}
              isLiked={set.isLiked}
              visibility={set.visibility}
              style={{ width: '500px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSetsLibrary;
