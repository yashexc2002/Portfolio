"use client";
import { motion } from "framer-motion";

const eduData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Galgotias University",
    status: "Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "GNIOT Group of Institutions",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#030303]">
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase mb-16"
      >
        Academic Background
      </motion.p>

      
      <div className="w-full max-w-3xl border-l border-white/10 pl-8 md:pl-12 py-4">
        {eduData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0 relative"
          >
            
            <div className="absolute -left-9.25 md:-left-13.25 top-2 h-2 w-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            
            <h3 className="text-xl md:text-3xl font-light text-white/90 tracking-wide mb-2">
              {item.degree}
            </h3>
            <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase">
              {item.institute} <span className="mx-2">|</span> <span className="text-white/50">{item.status}</span>
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}