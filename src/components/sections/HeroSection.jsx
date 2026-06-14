export default function HeroSection() {
  return (
    <>
      {/* 1️⃣ Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* 🎥 Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
          style={{ display: "block" }}
        >
          <source src="/e_a_b_e_ca_a_b_f_mp_.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5
        </video>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#7B2FFF]/10 dark:bg-[#7B2FFF]/15 rounded-full blur-3xl -z-10 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#A87FFF]/10 dark:bg-[#A87FFF]/15 rounded-full blur-3xl -z-10 transition-colors duration-500"></div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7B2FFF]/10 dark:bg-[#7B2FFF]/20 text-[#7B2FFF] dark:text-[#A87FFF] text-sm font-semibold mb-8 border border-[#7B2FFF]/20 dark:border-[#7B2FFF]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A87FFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B2FFF]"></span>
            </span>
            Innovación Digital
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 transition-colors duration-300">
            Páginas web optimizadas con{" "}
            <span className="text-[#7B2FFF]">IA</span> para hacer crecer tu
            negocio
          </h1>

          <p className="text-lg md:text-xl text-gray-900 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Páginas web optimizadas + IA y automatización de WhatsApp y
            formularios. Llevamos tu presencia digital al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
         
            <a
              href="#services"
              className="px-8 py-4 bg-white dark:bg-[#161621] hover:bg-gray-50 dark:hover:bg-[#1c1c2b] text-gray-700 dark:text-[#FFFFFF] border border-gray-200 dark:border-gray-800 rounded-full font-bold text-lg transition-all"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
