import { useState, useEffect } from "react";
import { Sun, Moon, X, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // 👈 agregar

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // 👈 agregar

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Nosotros", to: "/nosotros" }, // 👈 ruta aparte
    { name: "Servicios", href: "#services" },
    { name: "Beneficios", href: "#benefits" },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.to) {
      navigate(link.to); // 👈 navega a página aparte
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-[#0D0D14]/95 shadow-md backdrop-blur-sm py-4 border-b border-transparent dark:border-gray-800/50" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter transition-colors"
        >
          FLUX<span className="text-[#7B2FFF]">O</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-600 dark:text-gray-300 hover:text-[#7B2FFF] dark:hover:text-[#A87FFF] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[#7B2FFF] dark:hover:text-[#A87FFF] transition-colors font-medium"
              >
                {link.name}
              </a>
            ),
          )}

          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="https://wa.me/18298612740?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.859L.057 23.428a.75.75 0 0 0 .915.915l5.569-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 0 1-4.953-1.354l-.355-.211-3.674.97.984-3.595-.232-.371A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-800 dark:text-gray-200"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0D0D14] shadow-lg border-t dark:border-gray-800 py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => handleNavClick(link)}
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-[#7B2FFF] dark:hover:text-[#A87FFF]"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-[#7B2FFF] dark:hover:text-[#A87FFF]"
              >
                {link.name}
              </a>
            ),
          )}
          <a
            href="https://wa.me/1829XXXXXXX?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium w-full shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.859L.057 23.428a.75.75 0 0 0 .915.915l5.569-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 0 1-4.953-1.354l-.355-.211-3.674.97.984-3.595-.232-.371A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
