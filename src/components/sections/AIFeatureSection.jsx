import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

export default function AIFeatureSection() {
  const [businessType, setBusinessType] = useState("");
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!businessType.trim()) return;
    setIsLoading(true);
    setError(null);
    setIdeas([]);

    const apiKey = "AIzaSyBn02kZNkx917i8ponFXQ31m4wp9kE5VhE"; // La API Key es inyectada por el entorno automáticamente
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [{ 
        parts: [{ 
          text: `Eres un experto estratega digital en la agencia tecnológica 'Fluxo'. Un usuario acaba de visitar la página y dice que tiene el siguiente negocio: "${businessType}". Sugiere 3 ideas estratégicas, creativas y muy concisas (máximo 2 líneas cada una) sobre cómo este negocio específico puede escalar usando páginas web modernas, automatización de WhatsApp o Inteligencia Artificial. Sé persuasivo.` 
        }] 
      }],
      generationConfig: { 
        responseMimeType: "application/json", 
        responseSchema: { 
          type: "OBJECT", 
          properties: { 
            ideas: { 
              type: "ARRAY", 
              items: { type: "STRING" } 
            } 
          } 
        } 
      }
    };

    const maxRetries = 5;
    const delays = [1000, 2000, 4000, 8000, 16000];
    let retries = 0;
    let success = false;

    while (retries < maxRetries && !success) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        if (!response.ok) throw new Error('Error en la API');
        
        const data = await response.json();
        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (textResponse) {
          const parsed = JSON.parse(textResponse);
          setIdeas(parsed.ideas || []);
          success = true;
        } else {
          throw new Error('Respuesta inválida');
        }
      } catch (err) {
        if (retries === maxRetries - 1) {
          setError(err + "Tuvimos un problema conectando con nuestra IA. Por favor, inténtalo de nuevo.");
        } else {
          await new Promise(resolve => setTimeout(resolve, delays[retries]));
          retries++;
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-[#7B2FFF]/5 dark:bg-[#7B2FFF]/10 transition-colors duration-300 border-y border-[#7B2FFF]/10 dark:border-[#7B2FFF]/20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7B2FFF]/10 dark:bg-[#7B2FFF]/20 text-[#7B2FFF] dark:text-[#A87FFF] text-sm font-semibold mb-6">
          <Sparkles size={16} />
          Descubre tu Potencial IA ✨
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          ¿Cómo podemos transformar tu negocio?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Cuéntanos a qué te dedicas y nuestra Inteligencia Artificial generará al instante 3 estrategias personalizadas de digitalización para ti.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-10">
          <input 
            type="text" 
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Ej. Clínica Dental, Tienda de Ropa, Abogado..."
            className="flex-1 px-6 py-4 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D0D14] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#7B2FFF] outline-none transition-all shadow-sm"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button 
            onClick={handleGenerate}
            disabled={isLoading || !businessType.trim()}
            className="px-8 py-4 bg-[#7B2FFF] hover:bg-[#5E1EE5] disabled:bg-[#A87FFF] disabled:cursor-not-allowed text-white rounded-full font-bold shadow-lg shadow-[#7B2FFF]/30 transition-all flex justify-center items-center gap-2 min-w-[200px]"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Analizando...
              </>
            ) : (
              <>
                Generar Ideas ✨
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="p-4 mb-8 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-100 dark:border-red-900/30">
            {error}
          </div>
        )}

        {ideas.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-6 text-left animate-fade-in">
            {ideas.map((idea, idx) => (
              <div key={idx} className="bg-white dark:bg-[#161621] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#7B2FFF]/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform"></div>
                <div className="w-10 h-10 bg-[#7B2FFF]/10 dark:bg-[#7B2FFF]/20 rounded-full flex items-center justify-center text-[#7B2FFF] dark:text-[#A87FFF] font-bold mb-4">
                  {idx + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}