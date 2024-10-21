import React, { useState } from 'react';
import styles from './style.module.css';
import SearchComponent from '../SearchComponent/SearchComponent';
import PeopleComponent from '../PeopleComponent/PeopleComponent';

function FollowersComponent({ users }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Фільтрація користувачів за запитом пошуку
  const filteredPeople = users.filter((person) =>
    person.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Функція для обробки події пошуку
  const handleSearch = (query) => {
    setSearchQuery(query); // Оновлюємо пошуковий запит
  };

  return (
    <div className={styles.padding}>
      <SearchComponent placeholder="Search user" onClick={handleSearch} />
      <div className={styles.container}>
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <PeopleComponent
              key={person.username}
              username={person.username}
              text={person.text}
            />
          ))
        ) : (
          <p>No users found</p> // Якщо немає результатів
        )}
      </div>
    </div>
  );
}
export default FollowersComponent;