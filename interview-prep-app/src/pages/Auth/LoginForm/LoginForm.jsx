import React from 'react';
import { motion } from 'framer-motion';
import styles from './LoginForm.module.css';
import { useTranslation } from 'react-i18next';

const LoginForm = ({ onForgotPassword }) => {
  const { t } = useTranslation(); // Отримуємо функцію t для перекладів

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
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
          placeholder={t('email_or_username')}
          className={styles.input}
        />
      </motion.div>

      <motion.div
        className={styles.inputWrapper}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="password"
          placeholder={t('password')}
          className={styles.input}
        />
      </motion.div>

      <motion.div
        className={styles.forgotPassword}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={onForgotPassword} // Додаємо обробник кліку
      >
        {t('forgot_password')}
      </motion.div>

      <motion.button
        className={styles.loginButton}
        initial="hidden"
        animate="visible"
        variants={inputVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {t('log_in')}
      </motion.button>
    </div>
  );
};

export default LoginForm;
