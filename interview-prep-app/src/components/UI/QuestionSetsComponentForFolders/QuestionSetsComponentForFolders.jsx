import React from 'react';
import styles from './QuestionSetsComponentForFolders.module.css';
import iconSet from './iconSet.svg';
import iconAdd from './iconAdd.svg';
import iconAdded from './iconAdded.svg';

const QuestionSetsComponentForFolders = ({
  name,
  questionCount,
  author,
  isAdded,
  link,
  onToggle,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={iconSet} alt="iconSet" className={styles.setIcon} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.setName}>{name}</div>
        <div className={styles.infoContainer}>
          <div className={styles.questionCount}>{questionCount} questions</div>
        </div>
      </div>
      <div className={styles.addedIcon} onClick={onToggle}>
        {typeof isAdded !== 'undefined' && (
          <img
            src={isAdded ? iconAdded : iconAdd}
            alt={isAdded ? 'added' : 'add'}
            className={styles.actionIcon}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionSetsComponentForFolders;
