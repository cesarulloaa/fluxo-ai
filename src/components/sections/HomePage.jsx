import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import Services from "../sections/Services";
import BenefitsSection from "../sections/BenefitsSection";
import CTASection from "../sections/CTASection";
import Footer from "../sections/Footer";
import ContactModal from "../layout/ContactModal";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSession, setModalSession] = useState(0);

  const openModal = () => {
    setModalSession((s) => s + 1);
    setModalOpen(true);
  };

  return (
    <>
     <Helmet>
        <title>Fluxo | Páginas web con IA en República Dominicana</title>
        <meta name="description" content="Agencia digital en Santo Domingo. Creamos páginas web optimizadas con IA y automatización de WhatsApp para hacer crecer tu negocio dominicano." />
        <meta name="keywords" content="páginas web Santo Domingo, diseño web República Dominicana, agencia digital RD, automatización WhatsApp, páginas web con IA" />
        <link rel="canonical" href="https://fluxo.do" />
        <meta property="og:title" content="Fluxo | Páginas web con IA en República Dominicana" />
        <meta property="og:description" content="Creamos páginas web optimizadas con IA y automatización de WhatsApp para negocios dominicanos." />
        <meta property="og:url" content="https://fluxo.do" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fluxo.do/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fluxo | Páginas web con IA en República Dominicana" />
        <meta name="twitter:description" content="Agencia digital en Santo Domingo especializada en web con IA." />
      </Helmet>

      
      <HeroSection onOpenModal={openModal} />
      <AboutSection />
      <Services />
      <BenefitsSection onOpenModal={openModal} />
      <CTASection onOpenModal={openModal} />
      <Footer />
      <ContactModal
        key={modalSession}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}