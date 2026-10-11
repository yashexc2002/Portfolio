"use client";
import { motion } from "framer-motion";


const skillsList = [
  "Next.js", 
  "MERN Stack", 
  "TensorFlow.js", 
  "AI & ML", 
  "DSA"
];

export default function Skills() {
  return (
    
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase mb-16"
      >
        Core Arsenal
      </motion.p>
      
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-4xl">
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-white/30 hover:text-white transition-colors duration-500 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}