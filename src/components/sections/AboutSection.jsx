export default function AboutSection() {
  return (
    <>
      {/* 2️⃣ Sobre Fluxo */}
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-[#0A0A10] transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-[#FFFFFF]">
              Sobre Fluxo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Somos especialistas en transformar negocios tradicionales en
              potencias digitales. Nos enfocamos en soluciones modernas que
              combinan diseño de alto impacto con la eficiencia de la
              automatización. No solo hacemos sitios web; creamos ecosistemas
              digitales que trabajan por ti.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
