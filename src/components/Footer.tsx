import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: 'https://github.com/KusalDemo' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/kusal-gunasekara-337507234' },
                { Icon: Mail, href: 'mailto:kusalgunasekara2002@gmail.com' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Services'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>kusalgunasekara2002@gmail.com</li>
              <li>(+94) 72 889 3383</li>
              <li>Kandy, Sri Lanka</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Kusal Gunasekara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;