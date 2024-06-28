'use client';

import React, { useState } from 'react';
import { Logo, ProfileIcon, SettingsIcon } from './icons';
import { useNavigate, Link } from 'react-router-dom';
import AuthModal from '../components/loginform';
import SettingsModal from '../components/settings';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false); // Dodaj stan dla modalu ustawień
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  

  return (
    <header className="bg-transparent text-black py-6 px-4 md:px-6 flex items-center justify-between h-20 shadow-sm">
      <Link to="/" className="flex items-center gap-2 font-bold text-lg">
        <Logo className="h-25 w-25" />
      </Link>
      <div className="flex items-center gap-12">
        <div className="flex gap-8">
          <Link to="/" className="hover:text-gray-400 transition-colors text-xl">
            Strona główna
          </Link>
          <Link to="/projects" className="hover:text-gray-400 transition-colors text-xl">
            Projekty
          </Link>
          <Link to="/offer" className="hover:text-gray-400 transition-colors text-xl">
            Oferta
          </Link>
          <Link to="/" onClick={handleContactClick} className="hover:text-gray-400 transition-colors text-xl cursor-pointer">
            Kontakt
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsAuthModalOpen(true)} className="hover:text-gray-400 transition-colors">
            <ProfileIcon className="h-6 w-6" />
          </button>
          <button onClick={() => setIsSettingsModalOpen(true)} className="hover:text-gray-400 transition-colors">
            <SettingsIcon className="h-6 w-6" />
          </button>
          {/* <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 hover:bg-gray-300 focus:outline-none"
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button> */}
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onRequestClose={() => setIsAuthModalOpen(false)} />
      <SettingsModal isOpen={isSettingsModalOpen} onRequestClose={() => setIsSettingsModalOpen(false)} />
    </header>
  );
}
