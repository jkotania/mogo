"use client";
import { FiUser, FiSettings } from "react-icons/fi";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleUserIconClick = () => {
    if (user) {
      router.push("/profile");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <nav className="relative w-full bg-white border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="../logo.svg"
                alt="MOGO Logo"
                width={160}
                height={40}
                className="w-[140px] lg:w-[170px]"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 text-xl font-medium relative group"
            >
              Projekty
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/offer"
              className="text-gray-600 hover:text-gray-900 text-xl font-medium relative group"
            >
              Oferta
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contact-form";
                setTimeout(() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
              className="text-gray-600 hover:text-gray-900 text-xl font-medium relative group"
            >
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4 ml-6">
              <button
                onClick={handleUserIconClick}
                className="text-gray-600 hover:text-gray-900"
              >
                <FiUser className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <FiSettings className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 flex items-center justify-center"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 text-center w-full text-lg font-medium relative group"
            >
              Projekty
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/offer"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 text-center w-full text-lg font-medium relative group"
            >
              Oferta
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contact-form";
                setTimeout(() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 text-center w-full text-lg font-medium relative group"
            >
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="flex items-center justify-center space-x-4 px-3 py-2">
              <button
                onClick={handleUserIconClick}
                className="text-gray-600 hover:text-gray-900"
              >
                <FiUser className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <FiSettings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
}
