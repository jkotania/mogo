"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { useState, useEffect } from "react";
import CustomTextTransition from "@/components/CustomTextTransition";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const words = ["mieszkania", "apartamentu", "biura", "domu"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentTime = Date.now();

    if (lastSubmitTime && currentTime - lastSubmitTime < 30000) {
      alert("Proszę odczekać 30 sekund przed ponownym wysłaniem formularza.");
      return;
    }

    setLastSubmitTime(currentTime);
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([formData]);
      if (error) throw error;

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Błąd przy wysyłaniu formularza: ", error);
      alert("Wystąpił błąd podczas wysyłania wiadomości.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -120 },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 40,
      },
    },
    exit: { opacity: 0, x: 120 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="min-h-screen bg-white"
    >
      <Navbar />
      <header className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
        <div className="h-full mx-auto">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="https://ziscfxqjwhtehqqzqwnx.supabase.co/storage/v1/object/sign/images/furnitures.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZnVybml0dXJlcy5wbmciLCJpYXQiOjE3NDAxNzgyMzcsImV4cCI6MTc3MTcxNDIzN30.g484Z8r7W9-weUp602NycJdKhGew16uEhzyyrcLqo8A"
              alt="Meble"
              width={700}
              height={800}
              className="w-full h-full rounded-3xl object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60 rounded-3xl"></div>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-3xl lg:text-7xl font-light text-white z-20 text-center w-full px-4">
              Meble do{" "}
              <CustomTextTransition
                texts={words}
                interval={5000}
                direction="down"
              />
            </h1>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-4 py-4 lg:py-8 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-4xl lg:text-6xl font-light text-white text-center mb-6">
            Nasze realizacje
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Rectangle 11col.png",
              "Rectangle 1col2.png",
              "Rectangle 21col.png",
              "Rectangle 2col2.png",
              "Rectangle 31col.png",
              "Rectangle 3col2.png",
            ].map((imageName) => (
              <div
                key={imageName}
                className="relative aspect-square cursor-pointer"
                onClick={() => setSelectedImage(imageName)}
              >
                <Image
                  src={`https://ziscfxqjwhtehqqzqwnx.supabase.co/storage/v1/object/public/images//${imageName}`}
                  alt={`Realizacja ${imageName}`}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal do wyświetlania powiększonego zdjęcia */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-auto">
            <Image
              src={`https://ziscfxqjwhtehqqzqwnx.supabase.co/storage/v1/object/public/images//${selectedImage}`}
              alt={`Powiększona realizacja ${selectedImage}`}
              width={1200}
              height={800}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      )}
      <section
        id="contact-form"
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto rounded-3xl p-8 md:p-12 bg-white border-2 border-gray-400">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sekcja kontaktowa */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Skontaktuj się z nami
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="w-6 h-6 text-[#121CFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-gray-900 font-medium mb-2">
                      Adres
                    </h3>
                    <p className="text-gray-600">ul. Drzewna 16, Katowice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiPhone className="w-6 h-6 text-[#121CFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-gray-900 font-medium mb-2">
                      Telefon
                    </h3>
                    <p className="text-gray-600">+48 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiMail className="w-6 h-6 text-[#121CFF] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-gray-900 font-medium mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">contact@mogo.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl text-gray-900 font-medium mb-4">
                  Godziny otwarcia
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Pon-Pt: 8:00 - 18:00</p>
                  <p>Sob: 9:00 - 14:00</p>
                  <p>Niedz: Zamknięte</p>
                </div>
              </div>
            </div>

            {/* Formularz */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Dziękujemy! Twoja wiadomość została wysłana.
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white rounded-lg border border-gray-200 text-gray-900 focus:border-[#121CFF] focus:ring-2 focus:ring-[#121CFF] p-3 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Adres email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white rounded-lg border border-gray-200 text-gray-900 focus:border-[#121CFF] focus:ring-2 focus:ring-[#121CFF] p-3 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white rounded-lg border border-gray-200 text-gray-900 focus:border-[#121CFF] focus:ring-2 focus:ring-[#121CFF] p-3 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#121CFF] hover:bg-[#0e18cc] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Wysyłanie...
                  </>
                ) : (
                  "Wyślij wiadomość"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}
