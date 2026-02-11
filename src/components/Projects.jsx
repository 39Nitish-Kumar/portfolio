import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cloud Security Framework",
    description: "Implemented a robust IAM and Encryption protocol system to secure cloud data storage and transmission.",
    tags: ["Cloud Security", "IAM", "Encryption", "Java"],
    link: "#"
  },
  {
    title: "WPL Match Predictor",
    description: "Machine Learning model capable of predicting outcomes of Women's Premier League cricket matches with high accuracy.",
    tags: ["Machine Learning", "Python", "Data Analytics"],
    link: "#"
  },
  {
    title: "E-Commerce Web App",
    description: "Full-stack e-commerce application built using Java Servlets and JSP with comprehensive product management features.",
    tags: ["Java Servlets", "JSP", "MySQL", "JDBC"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#1a1b26] text-[#a9b1d6]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#24283b] rounded-xl overflow-hidden border border-[#414868] hover:border-[#7aa2f7]/50 transition-all duration-300 group flex flex-col h-full hover:shadow-lg hover:shadow-[#7aa2f7]/10"
            >
              <div className="h-48 bg-[#1f2335] relative overflow-hidden group">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26] to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1a1b26]/60 backdrop-blur-sm">
                  <span className="text-[#7aa2f7] font-semibold flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 p-2 bg-[#1a1b26]/50 rounded-lg w-fit backdrop-blur-md">
                    <FolderGit2 className="w-5 h-5 text-[#7aa2f7]" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#c0caf5] mb-3 group-hover:text-[#7aa2f7] transition-colors">{project.title}</h3>
                <p className="text-[#a9b1d6] mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1a1b26]/50 text-[#7aa2f7]/80 text-xs font-medium rounded-full border border-[#414868]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
