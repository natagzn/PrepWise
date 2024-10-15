import React from 'react';
import styles from './ResourceComponent.module.css';
import LikeDislikeToggle from '../LikeDislike/LikeDislikeToggle';

function ResourceComponent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.userIcon}></div>
            <div className={styles.username}>sofiyalev06</div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryText}>Without category</div>
        </div>
        <div className={styles.articleInfo}>
          <div className={styles.articleLabel}>Article/book:</div>
          <div className={styles.articleTitle}>
            Book1 Author A.A. Book1 Author
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionLabel}>Description:</div>
          <div className={styles.descriptionText}>
            Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.
            Lorem ipsum. Lorem ipsum. Lorem ipsum.
          </div>
        </div>
        <div className={styles.dateLikesContainer}>
          <div className={styles.date}>10.09.2024</div>
          <div className={styles.likesContainer}>
            <LikeDislikeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceComponent;
