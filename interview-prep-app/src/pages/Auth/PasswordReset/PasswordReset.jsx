import React from 'react';
import { motion } from 'framer-motion'; // Імпортуємо motion для анімацій
import styles from './PasswordReset.module.css';
import { useTranslation } from 'react-i18next';

const PasswordReset = ({ onCancel, onConfirm }) => {
  // Додаємо onCancel як пропс
  const { t } = useTranslation(); // Отримуємо функцію t для перекладу

  // Налаштовуємо анімаційні параметри
  const inputVariants = {
    hidden: { opacity: 0, y: -20 }, // Початковий стан (невидимий)
    visible: { opacity: 1, y: 0 }, // Кінцевий стан (видимий)
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>{t('reset_password')}</div>

      {/* Анімований інпут */}
      <motion.div
        className={styles.inputWrapper}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5 }}
      >
        <input
          type="email"
          placeholder={t('email')} // Використовуємо t для перекладу
          className={styles.input}
        />
      </motion.div>

      {/* Анімована кнопка підтвердження */}
      <motion.button
        className={styles.confirmButton}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={onConfirm}
      >
        {t('email_confirmation')}
      </motion.button>

      {/* Кнопка "Cancel", яка викликає функцію onCancel */}
      <motion.button
        className={styles.cancelButton}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 1 }} // Затримка для кнопки
        onClick={onCancel} // Виклик функції для повернення до LoginForm
      >
        {t('cancel')}
      </motion.button>
    </div>
  );
};

export default PasswordReset;
