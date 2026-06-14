// --- Estilos Globales y Animaciones ---
export const globalStyles = `
  html {
    scroll-behavior: smooth;
  }

  @keyframes flyOut {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    20% { transform: translate(-10px, 10px) scale(0.9); }
    100% { transform: translate(300px, -300px) scale(0.5); opacity: 0; }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fly {
    animation: flyOut 1s ease-in-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
`;