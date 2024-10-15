import React from 'react';
import styles from './QuestionSetComponent.module.css'; // Замініть на ваш шлях до стилів
import { SaveNot } from '../SaveNot/SaveNot';

const QuestionSetComponent = ({
  questionsCount,
  categories,
  username,
  date,
}) => {
  return (
    <div className={styles.container}>
      {/* Заголовок */}
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}></div>
          <div className={styles.title}>Name of set</div>
        </div>
        <div className={styles.savedIcon}>
          <SaveNot />
        </div>
      </div>

      {/* Кількість запитань */}
      <div className={styles['questions-count']}>10 questions</div>

      {/* Блок для категорій */}
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            {category}
          </div>
        ))}
      </div>

      {/* Інформація про користувача */}
      <div className={styles.footer}>
        <div className={styles.userInfo}>
          <div className={styles.userIcon}></div>
          <div className={styles.username}>{username}</div>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

export default QuestionSetComponent;
