import React, { useState } from 'react';
import styles from './AuthPage.module.css';
import placeholderImage from './backgroundLogin.png';
import googleIcon from './google.svg';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/UI/LanguageSwitcher/LanguageSwitcher';

const AuthPage = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={placeholderImage} alt="Placeholder" />
      <div
        className={`${styles.formContainer} ${isLogin ? styles.loginGap : styles.registerGap}`}
      >
        <LanguageSwitcher /> {/* Додаємо перемикач мови */}
        <div className={styles.logo}>PrepWise</div>
        <div className={styles.welcome}>
          {isLogin ? t('welcome_back') : t('sign_up')}
        </div>
        {/* Вибір між формами для входу і реєстрації */}
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className={styles.orSeparator}>
          <div className={styles.orLine}></div>
          <span className={styles.orText}>{t('or')}</span>
        </div>
        <div className={styles.googleButton}>
          <img
            src={googleIcon}
            alt="Google Icon"
            className={styles.googleIcon}
          />
          <span>{t('continue_with_google')}</span>
        </div>
        <div className={styles.signupPrompt}>
          <span>{isLogin ? t('no_account') : t('already_have_account')}</span>
          <span className={styles.signupLink} onClick={toggleAuthMode}>
            {isLogin ? t('sign_up') : t('log_in')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
