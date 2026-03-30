import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">{t.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">{t.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none backdrop-blur-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-indigo-500/25 transform hover:-translate-y-1"
              >
                <Send size={20} />
                {t.sendButton}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center space-y-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex items-start gap-5 group">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl group-hover:bg-white/20 transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email</h4>
                <a href="mailto:nef.3337@gmail.com" className="text-indigo-100 hover:text-white transition-colors text-lg font-light">
                  nef.3337@gmail.com
                </a>
              </div>
            </div>
            
            <div className="relative z-10 flex items-start gap-5 group">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl group-hover:bg-white/20 transition-colors">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Location</h4>
                <p className="text-indigo-100 text-lg font-light leading-relaxed">
                  Istanbul, Turkey<br />
                  Üsküdar University
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-start gap-5 group">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl group-hover:bg-white/20 transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Phone</h4>
                <p className="text-indigo-100 text-lg font-light">
                  Available upon request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
