import React from 'react';
import styles from './SettingsPage.module.css';
import HeaderComponent from '../../components/UI/HeaderComponent/HeaderComponent';

const SettingsPage = () => {
  return (
    <div>
      <HeaderComponent showSearch={true} showPremium={true} />

      <div className={styles.settingsContainer}>
        <h1 className={styles.title}>Settings</h1>
        {/* Personal Information Block */}
        <div className={styles.personalInfoBlock}>
          <div className={styles.personalInfoTitle}>Personal information</div>
          <div className={styles.personalInfoContent}>
            <div className={styles.profilePictureBlock}>
              <div className={styles.profileLabel}>Profile picture</div>
              <img
                className={styles.profileImage}
                src="https://via.placeholder.com/120x120"
                alt="Profile"
              />
              <div className={styles.profileEditIcon}>
                <div className={styles.circle}></div>
                <div className={styles.cross}></div>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.personalDetails}>
              <table className={styles.detailsTable}>
                <tbody>
                  <tr>
                    <td className={styles.detailLabel}>Username:</td>
                    <td className={styles.detailValue}>sofiyalev06</td>
                  </tr>
                  <tr>
                    <td className={styles.detailLabel}>Email:</td>
                    <td className={styles.detailValue}>
                      sofiyalev06@gmail.com
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.detailLabel}>Description:</td>
                    <td className={styles.detailValue}>
                      I’m student aaaaaaaa . . .
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.detailLabel}>Location:</td>
                    <td className={styles.detailValue}>Ukraine</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className={styles.languageBlock}>
          <div className={styles.languageLabel}>Language:</div>
          <div className={styles.languageValue}>English</div>
        </div>

        {/* Premium Block */}
        <div className={styles.premiumBlock}>
          <div className={styles.premiumLabel}>PrepWise Premium</div>
          <div className={styles.premiumUpgradeButton}>Upgrade</div>
        </div>

        {/* Log out Block */}
        <div className={styles.logoutBlock}>
          <div className={styles.logoutTitle}>Log out:</div>
          <div className={styles.logoutButton}>Log out</div>
        </div>

        {/* Delete Account Block */}
        <div className={styles.deleteAccountBlock}>
          <div className={styles.deleteLabel}>Delete account:</div>
          <div className={styles.deleteDescription}>
            This will delete all your data and cannot be undone
          </div>
          <div className={styles.deleteButton}>Delete account</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
