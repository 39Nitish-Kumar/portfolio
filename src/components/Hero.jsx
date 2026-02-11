import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1b26] pt-16">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7aa2f7]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#bb9af7]/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#c0caf5] mb-6 tracking-tight flex items-center justify-center gap-4 flex-wrap">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7]">Nitish Kumar</span> <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35" alt="Hand waving" />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          {/* Tokyo Night Color for Typing SVG: #7aa2f7 is approx 122, 162, 247 -> Hex 7AA2F7 */}
          <a href="https://git.io/typing-svg">
            <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=7AA2F7&center=true&vCenter=true&width=435&lines=B.Tech+CSE+Student;MERN+Stack+Learner;Aspiring+Full-Stack+Developer+%F0%9F%9A%80;Code.+Learn.+Build.+Repeat." alt="Typing SVG" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#a9b1d6] mb-10 max-w-2xl mx-auto italic"
        >
          Passionate about Web Development, Problem Solving, and building scalable applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] text-[#1a1b26] rounded-full font-bold shadow-lg shadow-[#7aa2f7]/20 hover:shadow-[#7aa2f7]/40 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/nitish-kumar-ab6134290/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-[#565f89] hover:border-[#7aa2f7]/50 text-[#a9b1d6] hover:text-[#c0caf5] rounded-full font-bold hover:bg-[#24283b] transition-all backdrop-blur-sm flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5 text-[#7aa2f7]" />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
