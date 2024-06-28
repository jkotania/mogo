import { Logo } from './icons'; // Import your Logo component

export default function Footer() {
  return (
    <footer className="py-2 md:py-6 mt-15 relative">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <nav className="flex flex-col items-center gap-4 md:flex-col md:items-center p-10">
          <h3 className="font-bold text-lg mb-5">Nawigacja</h3>
          <a href="/" className="font-medium hover:underline" prefetch={false}>
            Strona główna
          </a>
          <a href="/projects" className="font-medium hover:underline" prefetch={false}>
            Projekty
          </a>
          <a href="#" className="font-medium hover:underline" prefetch={false}>
            Oferta
          </a>
        </nav>
        <div className="flex flex-col items-center">
          <Logo className="h-8 w-28 mb-8 ml-4" />
          <p className=" text-xl font-light text-black mb-8 text-center">Mogo to firma zajmująca się tworzeniem nowych rozwiązań. <br />Meble tworzymy już od 24 lat.</p>
          <p className="text-sm text-gray-500">2024 &copy; Mogo</p>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-center p-10">
          <h3 className="font-bold text-lg mb-5">Kontakt</h3>
          <p className="text-sm text-muted-foreground">ul. Drzewna 16, Katowice</p>
          <p className="text-sm text-muted-foreground">+48 123 456 789</p>
          <p className="text-sm text-muted-foreground">contact@mogo.com</p>
        </div>
      </div>
    </footer>
  );
}
