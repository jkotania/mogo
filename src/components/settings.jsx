import React, { useState } from 'react';
import Modal from 'react-modal';
import { XIcon } from './icons'; // Upewnij się, że masz ikony zdefiniowane

Modal.setAppElement('#root');

const SettingsModal = ({ isOpen, onRequestClose }) => {
  const [notificationSettings, setNotificationSettings] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('pl');

  const handleSaveSettings = () => {
    // Zapisz ustawienia użytkownika tutaj
    alert('Ustawienia zapisane!');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Ustawienia</h2>
          <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationSettings}
              onChange={(e) => setNotificationSettings(e.target.checked)}
              className="mr-2"
            />
            Powiadomienia
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="mr-2"
            />
            Tryb ciemny
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Język</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="pl">Polski</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <button
          onClick={handleSaveSettings}
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Zapisz ustawienia
        </button>
      </div>
    </Modal>
  );
};

export default SettingsModal;
