import React from 'react';
import { motion } from 'framer-motion';
import styles from './LoginForm.module.css';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation(); // Отримуємо функцію t для перекладів

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
          placeholder={t('email_or_username')} // Використовуємо t для перекладу
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
          type="password"
          placeholder={t('password')} // Використовуємо t для перекладу
          className={styles.input}
        />
      </motion.div>

      <motion.div
        className={styles.forgotPassword}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.4 }} // Затримка для тексту "Forgot password?"
      >
        {t('forgot_password')} {/* Використовуємо t для перекладу */}
      </motion.div>

      <motion.button
        className={styles.loginButton}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.6 }} // Затримка для кнопки
      >
        {t('log_in')} {/* Використовуємо t для перекладу */}
      </motion.button>
    </div>
  );
};

export default LoginForm;
