import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import styles from './EditModal.module.css';
import { toast, ToastContainer } from 'react-toastify';

const EditModal = ({ isOpen, onClose, userData, onSave }) => {
  const { t } = useTranslation(); // Destructure t for translations
  const [formData, setFormData] = useState(userData);
  const [avatar, setAvatar] = useState(null); // State for the uploaded image

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif']; // Allowed file types

    // Reset the file input value to avoid showing the previous file name
    e.target.value = ''; // Clear the file input

    if (file) {
      if (!validImageTypes.includes(file.type)) {
        toast.error(
          t('invalid_file_type') // Translate error message
        ); // Show error toast
        setAvatar(null); // Reset avatar state to null
        return;
      }

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setAvatar(fileReader.result); // Set the image preview
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedData = { ...formData, avatar }; // Include avatar in the data
    onSave(updatedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>{t('edit_information')}</h2>{' '}
        {/* Use t for translating modal title */}
        <div>
          <label>{t('avatar')}:</label> {/* Translate label */}
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {avatar && (
            <img
              src={avatar}
              alt={t('avatar_preview')} // Translate alt text for image
              className={styles.avatarPreview}
            />
          )}
        </div>
        <div>
          <label>{t('username')}:</label> {/* Translate label */}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>{t('email')}:</label> {/* Translate label */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>{t('description')}:</label> {/* Translate label */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>{t('location')}:</label> {/* Translate label */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSave} className={styles.saveButton}>
          {t('save')} {/* Translate Save button */}
        </button>
        <button onClick={onClose} className={styles.cancelButton}>
          {t('cancel')} {/* Translate Cancel button */}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditModal;
