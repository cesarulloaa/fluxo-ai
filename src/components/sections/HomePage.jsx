import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import Services from "../sections/Services";
import BenefitsSection from "../sections/BenefitsSection";
import CTASection from "../sections/CTASection";
import Footer from "../sections/Footer";
import ContactModal from "../layout/ContactModal";
import { useState } from "react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSession, setModalSession] = useState(0);

  const openModal = () => {
    setModalSession((s) => s + 1);
    setModalOpen(true);
  };

  return (
    <>
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