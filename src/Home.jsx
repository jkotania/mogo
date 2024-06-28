import TextTransition, { presets } from "react-text-transition";
import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Importuj instancję db
import { useLocation } from "react-router-dom";
const TEXT = ["domu", "mieszkania", "biura"];

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearTimeout(intervalId);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the element is rendered
    }
  }, [location]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "orders"), formData);
      alert("Formularz został przesłany pomyślnie!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
      });
    } catch (error) {
      console.error("Błąd przy przesyłaniu formularza: ", error);
      alert("Wystąpił błąd podczas przesyłania formularza.");
    }
  };

  return (
    <>
      <section className="relative text-gray-50 py-2 md:py-3 lg:py-6 flex justify-center content-center">
        <div className="homediv relative flex justify-center items-center p-12">
          <div className="relative">
            <img
              src="furnitures.png"
              alt="Hero Product"
              className="heroimage rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-60 rounded-3xl"></div>
          </div>
          <h1 className="naglowek absolute text-4xl md:text-5xl lg:text-6xl font-bold z-20">
            Meble do{" "}
            <TextTransition
              inline={true}
              direction="down"
              springConfig={presets.gentle}
            >
              {TEXT[index % TEXT.length]}
            </TextTransition>
          </h1>
        </div>
      </section>
      <section className="text-white mx-auto lg:py-6 flex justify-center">
        <div className="featuredgrid flex flex-col items-center bg-[#1E1E1E] p-12 rounded-3xl ">
          <h2 className="naglowek1 text-6xl font-bold mb-12">
            Zobacz nasze projekty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <img
              src="./products/Rectangle 11col.png"
              alt="Project 1"
              className="rounded-md w-full h-auto"
            />
            <img
              src="./products/Rectangle 21col.png"
              alt="Project 2"
              className="rounded-md w-full h-auto"
            />
            <img
              src="./products/Rectangle 31col.png"
              alt="Project 3"
              className="rounded-md w-full h-auto"
            />
            <img
              src="./products/Rectangle 1col2.png"
              alt="Project 4"
              className="rounded-md w-full h-auto"
            />
            <img
              src="./products/Rectangle 2col2.png"
              alt="Project 5"
              className="rounded-md w-full h-auto"
            />
            <img
              src="./products/Rectangle 3col2.png"
              alt="Project 6"
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="mb-16"></section>
      <div className="formularz mx-auto space-y-6 p-20 px-8 sm:px-2 lg:px-3 rounded-3xl mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 text-clip">
            Zamów meble już DZIŚ!
          </h1>
          <h2 className="mt-12 text-xl text-gray-600">
            Wypełniając krótki formularz
          </h2>
        </div>
        <form
          className="flex flex-col space-y-8 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#121CFF] focus:ring-[#121CFF] sm:text-base p-3 bg-[#1E1E1E] text-white"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Podaj adres e-mail"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#121CFF] focus:ring-[#121CFF] sm:text-base p-3 bg-[#1E1E1E] text-white"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Numer telefon"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#121CFF] focus:ring-[#121CFF] sm:text-base p-3 bg-[#1E1E1E] text-white"
              />
            </div>
          </div>
          <div>
            <div className="mt-1 flex items-center justify-between gap-2">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="block rounded-md border-gray-300 shadow-sm focus:border-[#121CFF] focus:ring-[#121CFF] sm:text-base p-3 bg-[#1E1E1E] text-white"
              >
                <option value="">Wybierz rodzaj usługi</option>
                <option value="Zakup mebli">Zakup mebli/oświetlenia</option>
                <option value="Montaż mebli">Montaż mebli</option>
                <option value="Odnowienie mebli">Odnowienie mebli</option>
              </select>
              <a
                href="/offer"
                className="text-sm font-medium text-[#121CFF] hover:text-[#0e18cc] underline-offset-2 hover:underline w-3"
              >
                Sprawdź ofertę
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full rounded-md bg-[#121CFF] py-3 px-6 text-sm font-medium text-white shadow-sm hover:bg-[#0e18cc] focus:outline-none focus:ring-2 focus:ring-[#121CFF] focus:ring-offset-2"
            >
              Zamów rozmowę
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
