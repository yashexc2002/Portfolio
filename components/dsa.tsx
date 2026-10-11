"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiLeetcode, SiCodechef, SiCplusplus, SiJavascript } from "react-icons/si";

export default function DSA() {
  return (
    <section className="bg-[#050505] flex flex-col w-full py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between gap-20 px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase mb-12">
            Logical Architecture
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white/90 tracking-tighter mb-8 leading-[1.1]">
            Crafting <br /> Efficient <br /> Solutions.
          </h2>
          <p className="text-white/40 font-light text-sm md:text-base max-w-md mb-10 leading-relaxed">
            Beyond building seamless web interfaces, my core lies in algorithmic thinking. Leveraging both JavaScript and C++ to deconstruct complex computational problems, balancing dynamic scalable logic with low-level memory efficiency.
          </p>
          <div className="flex items-center gap-6 text-white/30">
            <div className="flex items-center gap-3">
              <SiJavascript className="text-xl md:text-2xl" />
              <SiCplusplus className="text-xl md:text-2xl" />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase">Primary Languages</span>
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link 
              href="https://leetcode.com/u/yashoberoi8434/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block border-b border-white/10 pb-8 hover:border-white/40 transition-colors duration-500"
            >
              <div className="flex justify-between items-end mb-6">
                <span className="text-white/80 text-3xl md:text-5xl font-light tracking-tight flex items-center gap-6">
                  <SiLeetcode className="text-white/20 group-hover:text-[#FFA116] transition-colors duration-500 text-3xl md:text-4xl" />
                  LeetCode
                </span>
                <span className="text-white/20 group-hover:text-white/60 transition-colors duration-500 text-5xl md:text-7xl font-extralight tracking-tighter">
                  200+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/30 text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors duration-500">
                  Problems Solved
                </span>
                <span className="text-white/20 group-hover:text-white transition-colors duration-500 text-xl font-light">
                  ↗
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link 
              href="https://www.codechef.com/users/yash_oberoi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block border-b border-white/10 pb-8 hover:border-white/40 transition-colors duration-500"
            >
              <div className="flex justify-between items-end mb-6">
                <span className="text-white/80 text-3xl md:text-5xl font-light tracking-tight flex items-center gap-6">
                  <SiCodechef className="text-white/20 group-hover:text-[#5B4638] transition-colors duration-500 text-3xl md:text-4xl" />
                  CodeChef
                </span>
                <span className="text-white/20 group-hover:text-white/60 transition-colors duration-500 text-5xl md:text-7xl font-extralight tracking-tighter">
                  1700
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/30 text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors duration-500">
                  Peak Rating
                </span>
                <span className="text-white/20 group-hover:text-white transition-colors duration-500 text-xl font-light">
                  ↗
                </span>
              </div>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}