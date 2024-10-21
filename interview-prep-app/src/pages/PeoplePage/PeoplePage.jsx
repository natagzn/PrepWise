import React, { useState } from 'react';
import styles from './PeoplePage.module.css';
import FollowingComponent from '../../components/UI/ForPeoplePage/FollowingComponent';
import FollowersComponent from '../../components/UI/ForPeoplePage/FollowersComponent';
import FriendsComponent from '../../components/UI/ForPeoplePage/FriendsComponent';

const PeoplePage = ({ username, onClose }) => {
  const [activeTab, setActiveTab] = useState('following');

  // Списки користувачів для кожної вкладки
  const followingList = [
    { username: 'sofiyalev06', text: 'Following' },
    { username: 'annanahalka', text: 'Following' },
    { username: 'annanahalka', text: 'Friends' },
    { username: 'natagzn1', text: 'Friends' },
    { username: 'natagzn3', text: 'Friends' },
    { username: 'natagzn4', text: 'Friends' },
  ];

  const followersList = [
    { username: 'user1', text: 'Followers' },
    { username: 'user2', text: 'Followers' },
    { username: 'annanahalka', text: 'Friends' },
    { username: 'natagzn1', text: 'Friends' },
    { username: 'natagzn3', text: 'Friends' },
    { username: 'natagzn4', text: 'Friends' },
  ];

  const friendsList = [
    { username: 'annanahalka', text: 'Friends' },
    { username: 'natagzn1', text: 'Friends' },
    { username: 'natagzn3', text: 'Friends' },
    { username: 'natagzn4', text: 'Friends' },
  ];

  // Функція для рендерингу компонентів залежно від активної вкладки
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'following':
        return <FollowingComponent users={followingList} />;
      case 'followers':
        return <FollowersComponent users={followersList} />;
      case 'friends':
        return <FriendsComponent users={friendsList} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.peoplePage}>
        <div className={styles.headerContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            <i className="fas fa-times" />
          </button>
          <h1 className={styles.username}>{username}</h1>
        </div>

        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${activeTab === 'following' ? styles.active : ''}`}
            onClick={() => setActiveTab('following')}
          >
            Following ({followingList.length}) {/* Додаємо кількість */}
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'followers' ? styles.active : ''}`}
            onClick={() => setActiveTab('followers')}
          >
            Followers ({followersList.length}) {/* Додаємо кількість */}
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'friends' ? styles.active : ''}`}
            onClick={() => setActiveTab('friends')}
          >
            Friends ({friendsList.length}) {/* Додаємо кількість */}
          </div>
        </div>

        <div className={styles.tabContent}>{renderActiveTabContent()}</div>
      </div>
    </div>
  );
};

export default PeoplePage;
