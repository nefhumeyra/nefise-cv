import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#020202] py-12 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-500 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all">
            <span className="sr-only">Twitter</span>
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all">
            <span className="sr-only">Instagram</span>
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all">
            <span className="sr-only">GitHub</span>
            <Github size={24} />
          </a>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-500 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Nefise Hümeyra Özsoy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
