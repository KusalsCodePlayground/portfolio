import React from 'react';
import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, Twitter} from 'lucide-react';

const codeText = `
  public class KusalsGreeting {
    public static void main(String[] args) {
        System.out.println(greet("Full Stack Developer"));
        System.out.println(greet("Backend Developer"));
    }

    public static String greet(String role) {
        return "Hello There, I'm a " + role + ".";
    }
}

`

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                  <motion.div
                      initial={{opacity: 0, x: -100}}
                      animate={{opacity: 1, x: 0}}
                      transition={{duration: 0.8}}
                      className="md:w-1/2"
                  >
                      <img
                          src= {"https://media.licdn.com/dms/image/v2/D5603AQH_ojZ7eeyw1Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719232623019?e=2147483647&v=beta&t=VthRWZhqDCSTG0xX6mWSBIVKqVzk12FO6JyfNPPLUX8"}
                          alt={"It's me ✌️"}
                          className="w-14 h-14 rounded-full object-cover mb-4"
                      />
                      <motion.h2
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{delay: 0.2}}
                          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                      >
                          Hi, I'm <span className="text-blue-600">Kusal Gunasekara</span>
                      </motion.h2>
                      <motion.p
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{delay: 0.4}}
                          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                      >
                          Full Stack Developer & Back end Developer
                      </motion.p>
                      <motion.div
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{delay: 0.6}}
                          className="flex space-x-4"
                      >
                          {[
                              {Icon: Github, href: 'https://github.com/KusalDemo'},
                              {Icon: Linkedin, href: 'https://www.linkedin.com/in/kusal-gunasekara-337507234'},
                              {Icon: Mail, href: 'mailto:kusalgunasekara2002@gmail.com'}
                          ].map(({Icon, href}, index) => (
                              <motion.a
                                  key={index}
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{scale: 1.2}}
                                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                              >
                                  <Icon className="w-6 h-6"/>
                              </motion.a>
                          ))}
                      </motion.div>
                  </motion.div>

                  <motion.div
                      initial={{opacity: 0, x: 100}}
                      animate={{opacity: 1, x: 0}}
                      transition={{duration: 0.8}}
                      className="md:w-1/2 w-full mt-12 md:mt-0"
                >
                  <div className="relative bg-gray-900 text-white rounded-lg shadow-lg p-4 sm:p-6">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400">IDE Preview</p>
                    </div>
                    <pre
                        className="text-xs sm:text-sm md:text-base font-mono leading-relaxed overflow-auto max-h-80 lg:max-h-96">
            {codeText}
        </pre>
                  </div>
                </motion.div>

              </div>
            </div>
        </section>
    );
};

export default Hero;
