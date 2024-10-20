import React from 'react';
import styles from './QuestionSetComponent.module.css'; // Замініть на ваш шлях до стилів
import { SaveNot } from '../SaveNot/SaveNot';

// Іконки для видимості
import PublicIcon from './public-icon.svg'; // Змініть на свій шлях до іконки
import PrivateIcon from './private-icon.svg'; // Змініть на свій шлях до іконки

const QuestionSetComponent = ({
  questionsCount,
  categories,
  username,
  date,
  level,
  isLiked,
  visibility, // public або private
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
          {isLiked ? (
            <SaveNot />
          ) : (
            <div className={styles.visibilityContainer}>
              {visibility === 'public' ? (
                <>
                  <img
                    src={PublicIcon}
                    alt="Public"
                    className={styles.visibilityIcon}
                  />
                  <span className={styles.visibilityInfo}> public</span>
                </>
              ) : (
                <>
                  <img
                    src={PrivateIcon}
                    alt="Private"
                    className={styles.visibilityIcon}
                  />
                  <span className={styles.visibilityInfo}> private</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Рядок для рівня та кількості запитань */}
      <div className={styles.infoRow}>
        <div className={styles.level}>
          <span className={styles.bold}>Level:</span>
          {'     '}
          <span className={styles.category}>{level}</span>
        </div>
        <div className={styles.questionsCount}>
          <span>{questionsCount} questions</span>
        </div>
      </div>

      {/* Рядок для категорій */}
      <div className={styles.categories}>
        <span className={styles.bold}>Categories:</span>
        {categories.map((category, index) => (
          <span key={index} className={styles.category}>
            {category}
          </span>
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
