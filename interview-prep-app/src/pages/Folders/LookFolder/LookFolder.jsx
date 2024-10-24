import React from 'react';
import styles from './LookFolder.module.css';
import { SaveNot } from '../../../components/UI/SaveNot/SaveNot';
import HeaderComponent from '../../../components/UI/HeaderComponent/HeaderComponent';
import SortComponent from '../../../components/UI/SortComponent/SortComponent';
import publicIcon from '../public.svg';
import privateIcon from '../private.svg';
import dots from '../dots.svg';
import QuestionSetsComponentForFolders from '../../../components/UI/QuestionSetsComponentForFolders/QuestionSetsComponentForFolders';

const LookFolder = ({ folderName, visibility, count, countQ }) => {
  const questionSetsData = [
    { id: 1, name: 'Set 1', count: 10, isAdded: true, author: 'me' },
    { id: 2, name: 'Set 2', count: 15, isAdded: false, author: 'me' },
    { id: 3, name: 'Set 3', count: 20, isAdded: true, author: 'me' },
  ];

  return (
    <div className={styles.container}>
      <HeaderComponent />
      <div className={styles.group}>
        <div className={styles.columnLeft}>
          <div className={styles.folderName}>{folderName}</div>
          <div className={styles.setsCount}>
            {count} sets • {countQ} questions
          </div>
        </div>
        <div className={styles.columnRight}>
          <div className={styles.groupInfo}>
            <div className={styles.saveNot}>
              <SaveNot />
            </div>
            <img
              src={visibility === 'Public' ? publicIcon : privateIcon}
              alt="visibility"
              className={styles.icon}
            />
            <div className={styles.visibility}>{visibility}</div>
            <div className={styles.threeDots}>
              <img src={dots} alt="dots" className={styles.icon} />
            </div>
          </div>
          <div className={styles.sortContainer}>
            <SortComponent sortingOptions={['1', '2']} />
          </div>
        </div>
      </div>
      <div className={styles.questionSets}>
        {questionSetsData.map((set) => (
          <QuestionSetsComponentForFolders
            key={set.id}
            name={set.name}
            questionCount={set.count}
            author={set.author}
            link={'#'}
          />
        ))}
      </div>
    </div>
  );
};

export default LookFolder;
