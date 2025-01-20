import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8}}
            className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <img
                src={"https://avatars.githubusercontent.com/u/117334841?v=4"}
                alt={"It's me ✌️"}
                className="rounded-2xl shadow-2xl mb-5"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I have plenty of backend programming competence, especially with Java and the Spring Framework, and I am a
              driven and efficient Full Stack Developer. I specialise in creating secure, scalable, and effective web
              apps
              using my knowledge of Java, Python, Typescript, ReactJS, NestJs and other cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {number: '2+', label: 'Years Experience'},
              {number: '20+', label: 'Projects Completed'},
              {number: '10+', label: 'Happy Clients'}
            ].map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{delay: index * 0.2}}
                    className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;