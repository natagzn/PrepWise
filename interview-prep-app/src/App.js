import './App.css';
import { useTranslation } from 'react-i18next';
import { FolderComponent } from './components/UI/FolderComponent/FolderComponent';
import { SaveNot } from './components/UI/SaveNot/SaveNot';
import QuestionSetComponent from './components/UI/QuestionSetComponent/QuestionSetComponent'; // Змінити на default імпорт

import ResourceComponent from './components/UI/ResourceComponent/ResourceComponent';
import HeaderComponent from './components/UI/HeaderComponent/HeaderComponent';
import { tr } from 'framer-motion/client';
import SearchComponent from './components/UI/SearchComponent/SearchComponent';
import AvatarMenu from './components/UI/AvatarMenu/AvatarMenu';
import NotificationsList from './components/UI/NotificationComponent/NotificationList/NotificationList';
import LoginPage from './pages/Auth/LoginForm';
import AuthPage from './pages/Auth/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import YourLibraryPage from './pages/YourLibraryPage/YourLibraryPage';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSearchClick = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/library" element={<YourLibraryPage />} />
      {/* Додай інші сторінки за потреби */}
    </Routes>
  );
}

/* <div
      style={{
        width: '100vw',
      }}
    >
      
        <QuestionSetComponent
          questionsCount={10}
          categories={['Without category', 'Second']}
          username="username"
          date="12.10.2002"
          level="trainee"
        />
      

      <FolderComponent />
      <ResourceComponent />
    </div>*/

export default App;
