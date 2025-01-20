import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row">
            <motion.img
                src={"https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"}
                alt={"The Coding Kitty"}
                className="w-10 h-auto mr-2"
            />
            <motion.span className="font-bold">Kusal G.</motion.span>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                  <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{scale: 1.1}}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {item}
                  </motion.a>
              ))}
            </nav>

            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
            </motion.button>

            <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                href="https://drive.google.com/file/d/1b1_-SR_nk1OncEgruhoKLCvV3N0Mf1xY/view?usp=share_link"
                download
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <Download className="w-4 h-4"/>
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;