import React, { useState, useEffect } from 'react';
import styles from './MainPage.module.css';
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';
import SearchComponent from '../../components/UI/SearchComponent/SearchComponent';
import QuestionSetComponent from '../../components/UI/QuestionSetComponent/QuestionSetComponent';
import ResourceComponent from '../../components/UI/ResourceComponent/ResourceComponent';

const MainPage = () => {
  const questionSets = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    questionsCount: 10,
    categories: ['Category 1', 'Category 2'],
    username: 'User ' + (index + 1),
    date: '2024-10-19',
    level: 'Easy',
    isLiked: index % 2 === 0,
    visibility: 'Public',
    title: 'Name of set ' + index,
  }));

  const resourceTitles = [
    'Book1 Author A.A.',
    'Book2 Author B.B.',
    'Article3 C.C.',
    'Book4 Author D.D.',
    'Book5 Author E.E.',
  ];

  const categories = ['Development', 'Design', 'Marketing', 'Science', 'Arts'];

  const resources = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    title: resourceTitles[index % resourceTitles.length],
    category: categories[index % categories.length],
    username: 'user' + index,
    date: '2024-10-19',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isLiked: index % 2 === 0,
  }));

  const [visibleItems, setVisibleItems] = useState(3);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentResourceIndex, setCurrentResourceIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setVisibleItems(1); // Відображення 1 елементу при ширині < 900px
      } else if (window.innerWidth < 1310) {
        setVisibleItems(2); // Відображення 2 елементів при ширині < 1310px
      } else {
        setVisibleItems(3); // Відображення 3 елементів на більших екранах
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleQuestionScrollLeft = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.max(0, prevIndex - visibleItems)
    );
  };

  const handleQuestionScrollRight = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(questionSets.length - visibleItems, prevIndex + visibleItems)
    );
  };

  const handleResourceScrollLeft = () => {
    setCurrentResourceIndex((prevIndex) =>
      Math.max(0, prevIndex - visibleItems)
    );
  };

  const handleResourceScrollRight = () => {
    setCurrentResourceIndex((prevIndex) =>
      Math.min(resources.length - visibleItems, prevIndex + visibleItems)
    );
  };

  return (
    <div className={styles.mainPage}>
      <HeaderComponent showSearch={true} showPremium={true} />
      <div className={styles.search}>
        <SearchComponent placeholder={'Enter your request'} />
      </div>

      <h2 className={styles.recommendationTitle}>
        Recommended from your following
      </h2>

      <div className={styles.questionSets}>
        <h2 className={styles.title}>Question sets</h2>
        <div className={styles.carousel}>
          <button
            onClick={handleQuestionScrollLeft}
            className={styles.arrowLeft}
            disabled={currentQuestionIndex === 0}
          >
            &lt;
          </button>
          <div
            className={styles.questionSetContainer}
            style={{
              display: 'flex',
              transform: `translateX(-${currentQuestionIndex * (100 / visibleItems)}%)`,
            }}
          >
            {questionSets.map((set) => (
              <div key={set.id} style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                <QuestionSetComponent
                  questionsCount={set.questionsCount}
                  categories={set.categories}
                  username={set.username}
                  date={set.date}
                  level={set.level}
                  isLiked={set.isLiked}
                  visibility={set.visibility}
                  title={set.title}
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleQuestionScrollRight}
            className={styles.arrowRight}
            disabled={
              currentQuestionIndex >= questionSets.length - visibleItems
            }
          >
            &gt;
          </button>
        </div>
      </div>

      <div className={styles.resources}>
        <h2 className={styles.title}>Resources</h2>
        <div className={styles.carousel}>
          <button
            onClick={handleResourceScrollLeft}
            className={styles.arrowLeft}
            disabled={currentResourceIndex === 0}
          >
            &lt;
          </button>
          <div
            className={styles.resourceContainer}
            style={{
              display: 'flex',
              transform: `translateX(-${currentResourceIndex * (100 / visibleItems)}%)`,
            }}
          >
            {resources.map((resource) => (
              <div
                key={resource.id}
                style={{ flex: `0 0 ${100 / visibleItems}%` }}
              >
                <ResourceComponent
                  key={resource.id}
                  title={resource.title}
                  category={resource.category}
                  username={resource.username}
                  date={resource.date}
                  description={resource.description}
                  report={true}
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleResourceScrollRight}
            className={styles.arrowRight}
            disabled={currentResourceIndex >= resources.length - visibleItems}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
