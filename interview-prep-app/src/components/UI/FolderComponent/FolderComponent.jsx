import React from 'react';
import styles from './FolderComponent.module.css'; // Імпорт стилів
import { SaveNot } from '../SaveNot/SaveNot';

export const FolderComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}></div>
          <div className={styles.folderName}>Folder name</div>
        </div>
        <div className={styles.savedIcon}>
          <SaveNot />
        </div>
      </div>
      <div className={styles.footer}>
        {/*<div className={styles.userInfo}>
          <div className={styles.userIcon}></div>
          <div className={styles.username}>sofiyalev06</div>
        </div>*/}
        <div className={styles.items}>2 items</div>
        <div className={styles.date}>10.09.2024</div>
      </div>
    </div>
  );
};
