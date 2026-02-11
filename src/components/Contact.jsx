import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#1a1b26] text-[#a9b1d6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#7aa2f7]/10 to-transparent"></div>
        
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7]">Me</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#24283b] p-8 rounded-3xl border border-[#414868] backdrop-blur-sm">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#c0caf5]">Let's Connect</h3>
                    <p className="text-[#a9b1d6] leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <a href="https://github.com/39Nitish-Kumar" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1a1b26] rounded-full hover:bg-[#7aa2f7]/20 hover:text-[#7aa2f7] transition-colors border border-[#414868]">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/nitish-kumar-ab6134290/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1a1b26] rounded-full hover:bg-[#7aa2f7]/20 hover:text-[#7aa2f7] transition-colors border border-[#414868]">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:nitish.kumar@example.com" className="p-3 bg-[#1a1b26] rounded-full hover:bg-[#7aa2f7]/20 hover:text-[#7aa2f7] transition-colors border border-[#414868]">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-[#c0caf5] mb-2">Name</label>
                    <input type="text" className="w-full bg-[#1a1b26] border border-[#414868] rounded-lg px-4 py-3 text-[#c0caf5] focus:outline-none focus:border-[#7aa2f7] transition-colors" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#c0caf5] mb-2">Email</label>
                    <input type="email" className="w-full bg-[#1a1b26] border border-[#414868] rounded-lg px-4 py-3 text-[#c0caf5] focus:outline-none focus:border-[#7aa2f7] transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-[#c0caf5] mb-2">Message</label>
                    <textarea rows="4" className="w-full bg-[#1a1b26] border border-[#414868] rounded-lg px-4 py-3 text-[#c0caf5] focus:outline-none focus:border-[#7aa2f7] transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] hover:from-[#7aa2f7] hover:to-[#bb9af7] text-[#1a1b26] font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90">
                    Send Message <Send className="w-4 h-4" />
                </button>
            </form>
        </div>
        
        <footer className="mt-20 text-center text-[#565f89] text-sm border-t border-[#24283b] pt-8">
            <p className="mb-2 italic">"Code. Learn. Build. Repeat."</p>
            <p>© 2026 Nitish Kumar. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
