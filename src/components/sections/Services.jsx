import services from "../../data/services";

export default function Services() {
  return (
    <>
      {/* 3️⃣ Servicios */}
      <section
        id="services"
        className="py-20 bg-white dark:bg-[#0D0D14] transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-[#FFFFFF]">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Soluciones tecnológicas adaptadas a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161621] shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:shadow-[#7B2FFF]/10 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#7B2FFF]/10 dark:bg-[#7B2FFF]/20 rounded-xl flex items-center justify-center text-[#7B2FFF] dark:text-[#A87FFF] mb-6 group-hover:bg-[#7B2FFF] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-[#FFFFFF]">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
