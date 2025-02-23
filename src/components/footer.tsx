import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 mt-12 border-t text-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Nawigacja */}
          <div className="flex flex-col items-center order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Nawigacja
            </h3>
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                Strona główna
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                Projekty
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/offer"
                className="text-gray-600 hover:text-gray-900 transition-colors relative group"
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
                className="text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                Kontakt
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#121CFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          {/* Logo i opis */}
          <div className="flex flex-col items-center order-1 lg:order-2 mb-8 sm:mb-0">
            <Image
              src="/logo.svg"
              alt="MOGO Logo"
              width={150}
              height={40}
              className="mb-4 sm:mb-6 w-32 sm:w-40 lg:w-48 h-auto"
            />
            <p className="text-gray-600 text-md sm:text-md max-w-xs sm:max-w-sm lg:max-w-md text-center px-4">
              Mogo to firma z 24-letnim doświadczeniem w tworzeniu ekskluzywnych
              mebli na wymiar. Specjalizujemy się w projektowaniu i wykonawstwie
              mebli dostosowanych do indywidualnych potrzeb klienta.
            </p>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-center order-3">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Kontakt
            </h3>
            <div className="space-y-3 sm:space-y-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                <span className="block font-semibold">Adres:</span>
                ul. Drzewna 16, Katowice
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                <span className="block font-semibold">Telefon:</span>
                +48 123 456 789
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                <span className="block font-semibold">Email:</span>
                contact@mogo.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-gray-200 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} MOGO. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
