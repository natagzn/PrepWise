import React, { useState } from 'react';
import styles from './YourLibraryPage.module.css';
import QuestionSetsComponent from '../../components/UI/ForLibrary/QuestionSetsLibrary/QuestionSetsLibrary';
import FoldersLibrary from '../../components/UI/ForLibrary/FoldersLibrary/FoldersLibrary';
import SharedComponent from '../../components/UI/ForLibrary/SharedComponent/SharedLibrary';
import ResourcesLibrary from '../../components/UI/ForLibrary/ResourcesLibrary/ResourcesLibrary';
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';

const YourLibraryPage = () => {
  const [activeTab, setActiveTab] = useState('questionSets');

  // Функція для рендерингу компонентів залежно від активної вкладки
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'questionSets':
        return <QuestionSetsComponent />;
      case 'folders':
        return <FoldersLibrary />;
      case 'shared':
        return <SharedComponent />;
      case 'resources':
        return <ResourcesLibrary />;
      default:
        return null;
    }
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className={styles.libraryPage}>
        <h1 className={styles.header}>Your Library</h1>

        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${activeTab === 'questionSets' ? styles.active : ''}`}
            onClick={() => setActiveTab('questionSets')}
          >
            Question Sets
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'folders' ? styles.active : ''}`}
            onClick={() => setActiveTab('folders')}
          >
            Folders
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'shared' ? styles.active : ''}`}
            onClick={() => setActiveTab('shared')}
          >
            Shared
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </div>
        </div>

        <div className={styles.tabContent}>{renderActiveTabContent()}</div>
      </div>
    </div>
  );
};

export default YourLibraryPage;
