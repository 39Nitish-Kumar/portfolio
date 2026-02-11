import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1b26] text-[#a9b1d6] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
        >

          {/* Image Side */}
          <div className="w-full lg:w-1/3 max-w-md relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="aspect-square bg-[#24283b] rounded-2xl overflow-hidden relative border border-[#414868]">
              <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="Coding" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#c0caf5]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7]">Me</span>
            </h2>

            <div className="space-y-4 text-[#a9b1d6] text-lg mb-8">
              <p>🎓 <strong>Education:</strong> B.Tech CSE Student</p>
              <p>🌱 <strong>Learning:</strong> MERN Stack, Python, Java & DSA</p>
              <p>💻 <strong>Passion:</strong> Web Development & Problem Solving</p>
              <p>🚀 <strong>Mission:</strong> Building projects and improving every day</p>
              <p>📈 <strong>Goal:</strong> To become a Skilled Full-Stack Developer</p>
            </div>
          </div>
        </motion.div>

        {/* GitHub Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#c0caf5]">GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7]">Analytics</span></h3>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
              <img src="https://github-readme-stats.vercel.app/api?username=39Nitish-Kumar&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1b26" alt="stats graph" className="h-40 md:h-48" />
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=39Nitish-Kumar&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1b26" alt="languages graph" className="h-40 md:h-48" />
            </div>
            <div className="w-full flex justify-center">
              <img src="https://streak-stats.demolab.com?user=39Nitish-Kumar&theme=tokyonight&hide_border=true&bg_color=1a1b26" alt="streak graph" className="w-full max-w-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
