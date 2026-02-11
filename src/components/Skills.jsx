import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaPython, FaJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
      { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-white" /> },
      { name: "REST APIs", icon: <FaDatabase className="w-8 h-8 text-[#bb9af7]" /> }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: <FaJava className="w-8 h-8 text-[#007396]" /> },
      { name: "Python", icon: <FaPython className="w-8 h-8 text-[#3776AB]" /> },
      { name: "JavaScript", icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" /> }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="w-8 h-8 text-white" /> },
      { name: "VS Code", icon: <VscVscode className="w-8 h-8 text-[#007ACC]" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#1a1b26] text-[#a9b1d6] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7]">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#24283b] p-6 rounded-2xl border border-[#414868] hover:border-[#7aa2f7]/50 transition-all group hover:-translate-y-2 hover:shadow-lg hover:shadow-[#7aa2f7]/10"
            >
              <h3 className="text-xl font-bold mb-6 text-[#c0caf5] border-b border-[#414868] pb-2">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-3 bg-[#1a1b26] rounded-xl hover:bg-[#1f2335] transition-colors border border-[#414868]/50">
                    <div className="mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-[#c0caf5]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
