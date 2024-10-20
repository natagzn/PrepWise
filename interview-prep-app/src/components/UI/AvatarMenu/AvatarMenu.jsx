import React, { useEffect, useRef, useState } from 'react';
import styles from './AvatarMenu.module.css';
import { useLanguage } from '../../../context/LanguageContext'; // Імпортуємо контекст мови
import { Link, useNavigate } from 'react-router-dom';

const menuIcons = {
  people: require('./people.svg').default,
  favorite: require('./favorite.svg').default,
  home: require('./home.svg').default,
  library: require('./library.svg').default,
  notifications: require('./notification.svg').default,
  achievements: require('./achievment.svg').default,
  settings: require('./settings.svg').default,
};

const menuLinks = {
  home: '/home', // Головна сторінка
  favorite: '/favorite', // Сторінка з улюбленим
  settings: '/settings', // Сторінка налаштувань
  people: '/people', // Інші сторінки
  library: '/library',
  notifications: '/notifications',
  achievements: '/achievements',
};

const AvatarMenu = () => {
  const { translations } = useLanguage(); // Отримуємо локалізовані значення
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Додаємо реф для меню

  const navigate = useNavigate();

  const handleLogout = () => {
    // Логіка виходу
    navigate('/login'); // Програмно переміщуємо користувача на сторінку входу
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Перемикаємо стан меню
  };

  // Функція для закриття меню
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Закриваємо меню при натисканні за його межами
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.avatarContainer}>
      <img
        className={styles.avatar}
        src="https://via.placeholder.com/65x65"
        alt="Avatar"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className={styles.menuPanel} ref={menuRef}>
          <div className={styles.menu}>
            <div className={styles.userInfo}>
              <img
                className={styles.userIcon}
                src="https://via.placeholder.com/50x50"
                alt="User Icon"
              />
              <div className={styles.userDetails}>
                <div className={styles.username}>sofiyalev06</div>
                <div className={styles.email}>sofiyalev06@email.com</div>
              </div>
            </div>
            <div className={styles.separator} />
            {Object.entries(menuIcons).map(([key, src]) => (
              <Link to={menuLinks[key]} key={key} className={styles.menuItem}>
                <img
                  className={`${styles.menuIcon} ${
                    key === 'home' ? styles.homeIcon : ''
                  }`}
                  src={src}
                  alt={key}
                />
                {translations[key] ||
                  key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
            <div className={styles.separator} />
            <div
              className={`${styles.menuItem} ${styles.logoutItem}`}
              onClick={handleLogout} // Викликаємо handleLogout при кліку
            >
              {translations.logout || 'Log out'}
            </div>
            <div className={`${styles.menuItem} ${styles.feedbackItem}`}>
              {translations.feedback || 'Help and feedback'}{' '}
              {/* Локалізація для допомоги */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
