import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Server, Smartphone } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side applications and APIs',
    icon: 'Server'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies',
    icon: 'Code'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with great user experience',
    icon: 'Palette'
  },
  {
    id: 4,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications',
    icon: 'Smartphone'
  }
];

const iconComponents = {
  Code,
  Palette,
  Server,
  Smartphone
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = iconComponents[service.icon as keyof typeof iconComponents];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg text-center"
                >
                  <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;