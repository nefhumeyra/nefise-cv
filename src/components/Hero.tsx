import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-800/50 shadow-2xl backdrop-blur-sm mb-8 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
          <img
            src="https://imgur.com/CHNWJfL.jpg"
            alt={t.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tighter mb-4"
        >
          {t.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-8"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-light"
        >
          {t.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:scale-105 transition-all shadow-xl hover:shadow-indigo-500/25"
          >
            {t.contactMe}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#resume"
            className="px-8 py-4 rounded-full glass-card text-gray-900 dark:text-white font-semibold hover:scale-105 transition-all"
          >
            {t.downloadCv}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Github, href: "#" },
            { icon: Mail, href: "mailto:nef.3337@gmail.com" }
          ].map((social, idx) => (
            <a 
              key={idx} 
              href={social.href} 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-1 transition-all"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
