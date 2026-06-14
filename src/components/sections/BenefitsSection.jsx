import benefits from "../../data/benefits.jsx";

const BenefitsSection = ({ onOpenModal = () => {} }) => {
  return (
    <>
      {/* 4️⃣ Beneficios */}
      <section
        id="benefits"
        className="py-20 bg-gray-900 dark:bg-[#0A0A10] text-white relative overflow-hidden border-t dark:border-gray-800 transition-colors duration-300"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#7B2FFF 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[#A87FFF] font-bold tracking-wider uppercase text-sm mb-2 block">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Impulsa tu negocio con tecnología real
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Deja de perder tiempo en tareas repetitivas. Nuestras
              implementaciones están diseñadas para generar ROI desde el primer
              mes.
            </p>
            <button
              onClick={onOpenModal}
              className="hidden lg:inline-block text-[#A87FFF] font-bold hover:text-white transition-colors border-b-2 border-[#7B2FFF]/30 hover:border-[#7B2FFF]"
            >
              Comenzar transformación &rarr;
            </button>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 dark:bg-[#161621] p-6 rounded-xl border border-white/10 dark:border-gray-800 hover:bg-white/10 dark:hover:bg-[#1c1c2b] transition-colors"
              >
                <div className="shrink-0 p-2 bg-[#7B2FFF]/20 rounded-lg">
                  {benefit.icon}
                </div>
                <span className="font-medium text-lg text-white">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BenefitsSection;
