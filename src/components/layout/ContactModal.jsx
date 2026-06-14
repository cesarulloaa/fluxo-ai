import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("sending");

    const texto = `¡Hola Fluxo! 👋
*Nombre:* ${formData.nombre} ${formData.apellido}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono || "No indicado"}
*Mensaje:* ${formData.mensaje}`;

    const url = `https://wa.me/18298612740?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
      setStep("success");
      window.open(url, "_blank");
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white dark:bg-[#161621] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in border border-gray-100 dark:border-gray-800">
        <div className="p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <X size={24} />
          </button>

          {step === "form" && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Hablemos de tu proyecto</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Déjanos tus datos y diseñemos juntos tu solución digital.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                    <input name="nombre" required type="text" value={formData.nombre} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D14] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-[#7B2FFF] outline-none transition-all"
                      placeholder="Juan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apellido</label>
                    <input name="apellido" required type="text" value={formData.apellido} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D14] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-[#7B2FFF] outline-none transition-all"
                      placeholder="Pérez" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                  <input name="email" required type="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D14] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-[#7B2FFF] outline-none transition-all"
                    placeholder="juan@empresa.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono (Opcional)</label>
                  <input name="telefono" type="tel" value={formData.telefono} onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D14] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-[#7B2FFF] outline-none transition-all"
                    placeholder="+1 809 000 0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">¿Qué necesitas?</label>
                  <textarea name="mensaje" required rows="3" value={formData.mensaje} onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D14] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-[#7B2FFF] outline-none transition-all"
                    placeholder="Quiero automatizar mi WhatsApp..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#7B2FFF] hover:bg-[#5E1EE5] text-white py-3 rounded-lg font-bold shadow-lg shadow-[#7B2FFF]/30 transition-all hover:-translate-y-0.5 flex justify-center items-center gap-2">
                  Enviar Solicitud
                </button>
              </form>
            </>
          )}

          {step === "sending" && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-[#7B2FFF] mb-4 animate-fly">
                <Send size={64} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Enviando mensaje...</h3>
            </div>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center justify-center py-10 animate-fade-in text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={48} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Gracias por contactar a Fluxo. Analizaremos tu solicitud y te responderemos a la brevedad.</p>
              <button onClick={onClose} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Cerrar ventana
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;