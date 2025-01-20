import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {Download, ExternalLink, Github} from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Crop Monitoring System',
    description: 'A secure and scalable crop monitoring system built with Java Spring Boot, utilizing MySQL for data storage and Hibernate ORM for efficient database operations. Implements Role-Based Access Control (RBAC) ',
    image: 'https://media.istockphoto.com/id/1451032726/photo/countryside-man-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=ckHXMa7lHoVpVkmnyGww9woI9BhNZP2YFDgsjJTCHos=',
    technologies: ['Spring Boot', 'MySQL', 'Hibernate', 'JWT'],
    link: 'https://github.com/KusalDemo/green-shadow-backend.git'
  },
  {
    id: 2,
    title: 'Residency e-Website',
    description: 'A secure and scalable residency management platform built with React for the frontend, Express.js for the backend, and Prisma for efficient database operations with MongoDB. ',
    image: 'https://media.istockphoto.com/id/1498811836/photo/real-estate-agent-or-real-estate-agent-was-holding-the-key-to-the-new-landlord-tenant-or.jpg?s=612x612&w=0&k=20&c=Tqx1pvcPfTtfF0YK_fgDtHtU8RifwaqvcLlm5zXyF7k=',
    technologies: ['ReactJs','ExpressJs', 'TypeScript', 'MongoDB', 'Prisma','Stripe'],
    link: 'https://github.com/KusalDemo/residency-market-front.git'
  },
  {
    id: 3,
    title: 'POS System Backend',
    description: 'Backend API for a POS system with layered architecture, built using Spring MVC, Spring Data JPA, Hibernate, and MySQL. Follows RESTful principles with comprehensive logging for monitoring.',
    image: 'https://getz.co/wp-content/uploads/2022/10/Restautant-POS-System-singapore-1536x450.jpg',
    technologies: ['Spring MVC','Hibernate','MySQL','SLF4J'],
    link: 'https://github.com/KusalDemo/Spring-POS-Backend.git'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
              ref={ref}
              initial={{opacity: 0, y: 50}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.8}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <motion.div
                      key={project.id}
                      initial={{opacity: 0, y: 20}}
                      animate={inView ? {opacity: 1, y: 0} : {}}
                      transition={{delay: index * 0.2}}
                      whileHover={{y: -10}}
                      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
                  >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                      <div className="flex justify-end space-x-4">
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.1}}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <Github className="w-6 h-6"/>
                        </motion.a>
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.1}}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ExternalLink className="w-6 h-6"/>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center mt-7">
          <motion.a
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
              href="https://github.com/KusalDemo?tab=repositories"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            <Github className="w-4 h-4"/>
            <span>View more projects</span>
          </motion.a>
        </div>
      </section>
  );
};

export default Projects;