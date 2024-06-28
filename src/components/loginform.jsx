import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Importuj instancję auth
import { XIcon } from './icons';

Modal.setAppElement('#root'); // Ustaw root element dla modalu

const AuthModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState(''); // Dodany stan do przechowywania komunikatu
  const [isProcessing, setIsProcessing] = useState(false); // Stan wskazujący, czy trwa proces logowania/rejestracji
  const [messageColor, setMessageColor] = useState(''); // Dodany stan do przechowywania koloru komunikatu
  const [user, setUser] = useState(null); // Dodany stan do przechowywania zalogowanego użytkownika

  // Sprawdzanie czy użytkownik jest zalogowany przy pierwszym renderowaniu komponentu
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      setIsProcessing(true);
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Zalogowano pomyślnie!');
      setMessageColor('text-green-600');
      setTimeout(() => {
        onRequestClose();
      }, 1500);
    } catch (error) {
      console.error('Błąd logowania:', error);
      handleFirebaseError(error); // Obsługa błędów Firebase
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRegister = async () => {
    try {
      setIsProcessing(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Zarejestrowano pomyślnie! Możesz teraz się zalogować.');
      setMessageColor('text-green-600');
      // Log out the user immediately after registration
      await signOut(auth);
      // Switch to login view
      setIsLogin(true);
    } catch (error) {
      console.error('Błąd rejestracji:', error);
      handleFirebaseError(error); // Obsługa błędów Firebase
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setMessage('Wylogowano pomyślnie!');
      setMessageColor('text-green-600');
    } catch (error) {
      console.error('Błąd wylogowania:', error);
      setMessage('Wystąpił błąd podczas wylogowywania.');
      setMessageColor('text-red-600');
    }
  };

  const handleFirebaseError = (error) => {
    const errorCode = error.code;
    let errorMessage = '';
    switch (errorCode) {
      case 'auth/invalid-email':
        errorMessage = 'Nieprawidłowy format adresu e-mail.';
        break;
      case 'auth/user-not-found':
        errorMessage = 'Nie znaleziono użytkownika o podanym adresie e-mail.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Błędne hasło. Sprawdź poprawność wprowadzonych informacji.';
        break;
      case 'auth/email-already-in-use':
        errorMessage = 'Podany adres e-mail jest już używany.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Hasło jest za słabe. Wprowadź silniejsze hasło.';
        break;
      default:
        errorMessage = 'Wystąpił błąd logowania/rejestracji. Spróbuj ponownie później.';
        break;
    }
    setMessage(errorMessage);
    setMessageColor('text-red-600');
  };

  if (user) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6 absolute right-1/3 top-1/4 m-2" />
          </button>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl h-1/2 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold">Jesteś już zalogowany!</h2>
          <button onClick={handleLogout} className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Wyloguj się
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl h-1/2 flex flex-col justify-around">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{isLogin ? 'Logowanie' : 'Rejestracja'}</h2>
          <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6 absolute right-1/3 top-1/4 m-2" />
          </button>
        </div>
        {message && <p className={`mb-4 ${messageColor}`}>{message}</p>}
        <form onSubmit={(e) => { e.preventDefault(); isLogin ? handleLogin() : handleRegister(); }}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={isProcessing}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={isProcessing}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            disabled={isProcessing}
          >
            {isLogin ? 'Logowanie' : 'Rejestracja'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-black"
          disabled={isProcessing}
        >
          {isLogin ? 'Nie masz konta? ' : 'Masz już konto? '}
          <span className="text-blue-600 hover:text-blue-700">
            {isLogin ? 'Zarejestruj się' : 'Zaloguj się'}
          </span>
        </button>
      </div>
    </Modal>
  );
};

export default AuthModal;
