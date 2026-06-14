import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      {/* Navbar simple */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-white/80 dark:bg-[#0D0D14]/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter"
        >
          FLUX<span className="text-[#7B2FFF]">O</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:text-[#7B2FFF] font-medium transition-colors"
          >
            ← Inicio
          </Link>

          <a
            href="https://wa.me/1829XXXXXXX?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-[#25D366]/30"
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
      </nav>
      <section id="nosotros" className="min-h-screen py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7B2FFF]/10 border border-[#7B2FFF]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7B2FFF]"></span>
              <a href="/" className="text-sm font-medium text-[#7B2FFF]">
                Inicio
              </a>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Somos <span className="text-[#7B2FFF]">Fluxo</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
              Una agencia digital dominicana que combina diseño web profesional
              con inteligencia artificial para que tu negocio crezca en línea.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: "💻",
                title: "Desarrollo a medida",
                desc: "Páginas web rápidas, modernas y optimizadas para convertir visitas en clientes.",
              },
              {
                icon: "🤖",
                title: "IA + Automatización",
                desc: "Integramos IA y automatización de WhatsApp para que tu negocio trabaje 24/7 sin esfuerzo.",
              },
              {
                icon: "📍",
                title: "Enfoque local",
                desc: "Nacimos en República Dominicana, entendemos el mercado y hablamos tu idioma.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-[#161621] border border-gray-100 dark:border-gray-800 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7B2FFF]/10 flex items-center justify-center mb-4 text-lg">
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="bg-gray-50 dark:bg-[#161621] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
              Creemos que cada negocio dominicano merece una presencia digital
              profesional. Por eso ofrecemos soluciones completas a precios
              accesibles, sin complicaciones.
            </p>
            <div className="flex gap-8">
              {[
                { value: "100%", label: "Enfoque digital" },
                { value: "24/7", label: "Soporte IA" },
                { value: "RD", label: "Origen local" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-[#7B2FFF]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
