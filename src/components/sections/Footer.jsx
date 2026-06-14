import { Smartphone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-[#0A0A10] py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-gray-900 dark:text-[#FFFFFF] tracking-tighter">
            FLUX<span className="text-[#7B2FFF]">O</span>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fluxo. Todos los derechos
            reservados.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#7B2FFF] dark:hover:text-[#A87FFF] transition-colors"
            >
              <Smartphone size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#7B2FFF] dark:hover:text-[#A87FFF] transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
