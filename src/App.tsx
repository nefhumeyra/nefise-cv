import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-500/30 transition-colors duration-500 overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
