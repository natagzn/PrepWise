import './App.css';
import { useTranslation } from 'react-i18next';
import { FolderComponent } from './components/UI/FolderComponent/FolderComponent';
import { SaveNot } from './components/UI/SaveNot/SaveNot';
import QuestionSetComponent from './components/UI/QuestionSetComponent/QuestionSetComponent'; // Змінити на default імпорт

import ResourceComponent from './components/UI/ResourceComponent/ResourceComponent';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        width: '100vw',
        height: '300px',
      }}
    >
      <FolderComponent />
      <QuestionSetComponent
        questionsCount={10}
        categories={['Without category', 'Category 1', 'Category 2']}
        setName="Name of set"
        username="sofiyalev06"
        date="10.09.2024"
      />
      <ResourceComponent />
    </div>
  );
}

export default App;
