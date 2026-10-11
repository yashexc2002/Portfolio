"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#020202] flex flex-col w-full pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-20 mb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase mb-12">
            Initiate Contact
          </p>
          <h2 className="text-6xl md:text-[8rem] font-light text-white/90 tracking-tighter leading-[0.9] mb-8">
            Let&apos;s <br /> Connect.
          </h2>
          <p className="text-white/40 font-light text-sm md:text-base max-w-sm tracking-wide">
            Always open to discussing scalable architecture, AI integrations, or exploring open-source collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-full md:w-auto"
        >
          <Link
            href="https://github.com/yashexc2002"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 border-b border-white/10 pb-6 hover:border-white/40 transition-colors duration-500 w-full md:w-72"
          >
            <div className="flex justify-between items-center text-white/70 group-hover:text-white transition-colors duration-500 text-3xl font-light tracking-tight">
              <span>GitHub</span>
              <span className="text-white/20 group-hover:text-white transition-colors duration-500 font-light">↗</span>
            </div>
            <span className="text-white/30 text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors duration-500">
              Open Source Contributions
            </span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/yash-oberoi-12547a370"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 border-b border-white/10 pb-6 hover:border-white/40 transition-colors duration-500 w-full md:w-72"
          >
            <div className="flex justify-between items-center text-white/70 group-hover:text-white transition-colors duration-500 text-3xl font-light tracking-tight">
              <span>LinkedIn</span>
              <span className="text-white/20 group-hover:text-white transition-colors duration-500 font-light">↗</span>
            </div>
            <span className="text-white/30 text-[10px] md:text-xs tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors duration-500">
              Professional Connect
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase">
        <span>© 2026 Yash Oberoi.</span>
        <span className="mt-4 md:mt-0">Crafted with Next.js</span>
      </div>
    </section>
  );
}