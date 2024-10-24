import React, { useState } from 'react';
import styles from './CreateEditFolder.module.css';
import HeaderComponent from '../../../components/UI/HeaderComponent/HeaderComponent';
import QuestionSetsComponentForFolders from '../../../components/UI/QuestionSetsComponentForFolders/QuestionSetsComponentForFolders';

const CreateEditFolder = ({
  folderName,
  visibility,
  questionSetsData,
  editOrCreate,
}) => {
  questionSetsData = [
    { id: 1, name: 'Set 1', count: 10, isAdded: true, author: 'me' },
    { id: 2, name: 'Set 2', count: 15, isAdded: false, author: 'me' },
    { id: 3, name: 'Set 3', count: 20, isAdded: true, author: 'me' },
  ];

  const [selectedSets, setSelectedSets] = useState(
    questionSetsData.filter((set) => set.isAdded)
  );

  const count = selectedSets.length;
  const countQ = selectedSets.reduce((acc, set) => acc + set.count, 0);

  const toggleSetSelection = (setId) => {
    setSelectedSets((prevSelectedSets) => {
      const isAlreadySelected = prevSelectedSets.some(
        (set) => set.id === setId
      );
      if (isAlreadySelected) {
        return prevSelectedSets.filter((set) => set.id !== setId);
      } else {
        const newSet = questionSetsData.find((set) => set.id === setId);
        return [...prevSelectedSets, newSet];
      }
    });
  };

  const handleCreate = () => {
    console.log('Creating folder with sets:', selectedSets);
  };

  const handleUpdate = () => {
    console.log('Updating folder with sets:', selectedSets);
  };

  return (
    <div className={styles.container}>
      <HeaderComponent />

      <div className={styles.group}>
        <div className={styles.columnLeft}>
          <div className={styles.folderTitle}>Create/edit a folder</div>
          <div className={styles.inputField}>
            <div className={styles.inputText}>Enter a title</div>
          </div>
        </div>

        <div className={styles.columnRight}>
          <button
            onClick={editOrCreate === 'create' ? handleCreate : handleUpdate}
            className={styles.createUpdateButton}
          >
            {editOrCreate === 'create' ? 'Create' : 'Update'}
          </button>
          <div className={styles.setsCount}>
            Was chosen: {count} sets • {countQ} questions
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
            isAdded={selectedSets.some((selected) => selected.id === set.id)}
            onToggle={() => toggleSetSelection(set.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateEditFolder;
