import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { GraduationCap, Code, PenTool, Share2, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].about;

  const icons = [
    <Code className="text-blue-500 dark:text-blue-400" size={24} />,
    <Share2 className="text-pink-500 dark:text-pink-400" size={24} />,
    <PenTool className="text-green-500 dark:text-green-400" size={24} />,
    <Sparkles className="text-purple-500 dark:text-purple-400" size={24} />,
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">{t.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card rounded-3xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-2xl text-indigo-600 dark:text-indigo-400 shadow-inner">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{t.educationTitle}</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800/50">
              <div className="absolute w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full -left-[11px] top-1 border-4 border-white dark:border-gray-900 shadow-sm"></div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.education.school}</h4>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{t.education.department}</p>
              <p className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 mb-5">{t.education.date}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">{t.education.courses}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">{t.skillsTitle}</h3>
            
            <div className="space-y-8">
              {t.skills.map((skill, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform">
                    {icons[index % icons.length]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{skill.category}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">{skill.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
