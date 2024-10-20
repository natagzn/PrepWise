import React, { useEffect, useState } from 'react';
import styles from './FoldersLibrary.module.css'; // Імпорт стилів
import { FolderComponent } from '../../FolderComponent/FolderComponent'; // Імпорт компонента папки
import SortComponent from '../../SortComponent/SortComponent'; // Імпорт компонента сортування
import SearchComponent from '../../SearchComponent/SearchComponent'; // Імпорт компонента пошуку

const FoldersLibrary = () => {
  const [folders, setFolders] = useState([]); // Змінено на folders
  const [selectedSortingOption, setSelectedSortingOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sortingOptions = [
    { label: 'Created (new -> old)', value: 'createdDesc' },
    { label: 'Created (old -> new)', value: 'createdAsc' },
    { label: 'Name (A -> Z)', value: 'nameAsc' },
    { label: 'Name (Z -> A)', value: 'nameDesc' },
  ];

  useEffect(() => {
    // Генерація даних для папок
    const titles = [
      'Project Documentation',
      'Client Proposals',
      'Meeting Notes',
      'Research Papers',
      'Design Assets',
    ];

    const generateRandomDate = () => {
      const start = new Date(2023, 0, 1); // 1 січня 2023
      const end = new Date(); // Сьогодні
      const date = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      return date.toISOString().split('T')[0]; // Повертає дату у форматі YYYY-MM-DD
    };

    setFolders(
      Array.from({ length: 8 }, (_, index) => ({
        id: index,
        title: titles[index % titles.length], // Використовуємо назви з масиву
        itemsCount: Math.floor(Math.random() * 20) + 5, // Випадкова кількість елементів
        date: generateRandomDate(), // Генеруємо випадкову дату
        isLiked: index % 2 === 0,
      }))
    );
  }, []);

  // Функція для сортування папок
  const sortedFolders = () => {
    let filteredFolders = folders.filter((folder) => {
      // Додаємо логіку пошуку
      const matchesSearchTerm = folder.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesSearchTerm; // Повертаємо тільки за умовою пошуку
    });

    // Сортуємо фільтровані папки
    if (selectedSortingOption) {
      return filteredFolders.sort((a, b) => {
        switch (selectedSortingOption) {
          case 'createdDesc':
            return new Date(b.date) - new Date(a.date);
          case 'createdAsc':
            return new Date(a.date) - new Date(b.date);
          case 'nameAsc':
            return a.title.localeCompare(b.title);
          case 'nameDesc':
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
    }
    return filteredFolders; // Якщо не вибрано сортування, повертаємо фільтрований масив
  };

  // Обробник для оновлення значення пошуку
  const handleSearchClick = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className={styles.foldersWrapper}>
      <div className={styles.filterSortWrapper}>
        <div className={styles.leftGroup}>
          <div className={styles.sortComponent}>
            <SortComponent
              sortingOptions={sortingOptions}
              onSortChange={setSelectedSortingOption}
            />
          </div>
        </div>
        <div className={styles.search}>
          <SearchComponent
            placeholder="Search folders..."
            onClick={handleSearchClick} // Передаємо обробник
          />
        </div>
      </div>
      <div className={styles.foldersList}>
        {sortedFolders().map((folder) => (
          <FolderComponent
            key={folder.id}
            folderName={folder.title} // Назва папки
            itemsCount={folder.itemsCount} // Кількість елементів
            date={folder.date} // Дата
            isLiked={folder.isLiked}
          />
        ))}
      </div>
    </div>
  );
};

export default FoldersLibrary;
