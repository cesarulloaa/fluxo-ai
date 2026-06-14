import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/sections/HomePage";
import AboutUs from "./components/sections/AboutUs";
import { useState } from "react";
import { globalStyles } from "./styles/globalStyles";
import { HelmetProvider } from "react-helmet-async";

const Layout = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/nosotros";

  return (
    <>
      {showNavbar && (
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="font-sans bg-white dark:bg-[#0D0D14] min-h-screen transition-colors duration-300">
          <style>{globalStyles}</style>
          <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
