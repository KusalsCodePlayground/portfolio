import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Technology Stack
            </h2>

            <motion.div className="text-center">
              <img
                  src="https://skillicons.dev/icons?i=java,py,cpp,cs,spring,net,nodejs,nestjs,expressjs,html,css,js,ts,react,bootstrap,tailwindcss,figma,jquery,hibernate,regex,mysql,mongodb,postman,flask,prisma,idea,webstorm,rider,vscode,github,git,maven,npm,yarn,vite,gradle,discord,stackoverflow,firebase,notion"
                  alt="Tech Stack"
                  className="mx-auto max-w-full h-auto"
              />
              <img
                  src="https://img.shields.io/badge/-Built%20to%20Solve,%20Not%20to%20Showcase-555555?style=for-the-badge&logo=Tools&logoColor=white"
                  alt="Built to Solve, Not to Showcase" className="mx-auto max-w-full h-auto mt-7"/>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default TechStack;
