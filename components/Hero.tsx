"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24 bg-[#020202]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex w-full flex-col items-center text-center mt-10 md:mt-0"
      >
        <div className="relative mb-16 md:mb-20 flex justify-center items-center">
          
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -4, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="absolute w-64 h-[22rem] md:w-80 md:h-[28rem] bg-[#0a0a0a] border border-white/5 shadow-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute w-64 h-[22rem] md:w-80 md:h-[28rem] bg-[#0d0d0d] border border-white/5 shadow-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-[22rem] md:w-80 md:h-[28rem] bg-[#050505] border border-white/10 p-3 md:p-4 shadow-2xl group cursor-pointer"
          >
            <div className="absolute top-2 left-3 text-[7px] md:text-[8px] text-white/30 tracking-[0.2em] font-mono">
              YASH O. // 2026
            </div>
            
            <div className="absolute top-1 right-3 text-[14px] text-white/30 font-light">
              +
            </div>
            
            <div className="relative w-full h-[18rem] md:h-[23.5rem] mt-4 overflow-hidden bg-[#0a0a0a] border border-white/5">
              <Image
                src="/profile.jpg"
                alt="Yash Oberoi"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            
            <div className="absolute bottom-1 left-3 text-[14px] text-white/30 font-light">
              +
            </div>
            
            <div className="absolute bottom-2 right-3 text-[6px] md:text-[7px] text-white/20 tracking-[0.2em] text-right font-mono flex flex-col">
              <span>SYS.ACTIVE_RUN</span>
              <span>NO. 8459-00</span>
            </div>
          </motion.div>
        </div>

        <h1 className="mb-4 text-5xl md:text-7xl lg:text-[6rem] font-extralight tracking-tight text-white/90 uppercase">
          Yash Oberoi
        </h1>
        <p className="text-[9px] md:text-xs tracking-[0.4em] text-white/40 uppercase">
          Crafting Scalable Web & AI
        </p>
      </motion.div>
    </section>
  );
}
