import React from 'react';
import { motion } from 'framer-motion'; // Імпортуємо motion
import styles from './RegisterForm.module.css';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
  const { t } = useTranslation(); // Отримуємо функцію t для перекладу

  // Налаштовуємо анімаційні параметри
  const inputVariants = {
    hidden: { opacity: 0, y: -20 }, // Початковий стан (невидимий)
    visible: { opacity: 1, y: 0 }, // Кінцевий стан (видимий)
  };

  return (
    <div className={styles.inputContainer}>
      <motion.div
        className={styles.inputWrapper}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder={t('username')} // Використовуємо t для перекладу
          className={styles.input}
        />
      </motion.div>

      <motion.div
        className={styles.inputWrapper}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.2 }} // Затримка для другого поля
      >
        <input
          type="email"
          placeholder={t('email')} // Використовуємо t для перекладу
          className={styles.input}
        />
      </motion.div>

      <motion.div
        className={styles.inputWrapper}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.4 }} // Затримка для третього поля
      >
        <input
          type="password"
          placeholder={t('password')} // Використовуємо t для перекладу
          className={styles.input}
        />
      </motion.div>

      <motion.div
        className={styles.inputWrapper}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.6 }} // Затримка для четвертого поля
      >
        <input
          type="password"
          placeholder={t('confirm_password')} // Використовуємо t для перекладу
          className={styles.input}
        />
      </motion.div>

      <motion.button
        className={styles.registerButton}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.8 }} // Затримка для кнопки
      >
        {t('sign_up')} {/* Використовуємо t для перекладу */}
      </motion.button>
    </div>
  );
};

export default RegisterForm;
