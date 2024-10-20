import React from 'react';
import styles from './HeaderComponent.module.css'; // Підключення CSS файлу
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import SearchComponent from '../SearchComponent/SearchComponent';

const HeaderComponent = ({ showSearch, showPlus, showPremium }) => {
  return (
    <div className={styles.header}>
      <div className={styles['left-group']}>
        <div className={styles.logo}>PrepWise</div>
      </div>

      <div className={styles['right-group']}>
        {showSearch && (
          <div className={styles['search']}>
            <SearchComponent placeholder={'Enter your request'} />
          </div>
        )}

        {showPremium && (
          <div className={styles['premium-box']}>
            <div className={styles['premium-text']}>Free 7-day trial</div>
          </div>
        )}

        {showPlus && (
          <div className={styles['plus-icon']}>
            <div className={styles['plus-box']}></div>
          </div>
        )}

        <div className={styles.avatar}>
          <AvatarMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
