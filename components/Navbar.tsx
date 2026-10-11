"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 py-6 px-6 md:px-12 flex justify-between items-center text-white/60 text-xs md:text-sm tracking-[0.15em] uppercase">
        <Link href="/" className="hover:text-white transition-colors duration-500 relative z-50">
          Yash.
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="#skills" className="hover:text-white transition-colors duration-500">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-colors duration-500">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-500">Contact</Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-white/60 hover:text-white transition-colors tracking-[0.15em] uppercase text-xs"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-12"
          >
            <Link onClick={() => setIsOpen(false)} href="#skills" className="text-2xl font-light text-white/70 hover:text-white tracking-[0.3em] uppercase transition-colors duration-500">
              Skills
            </Link>
            <Link onClick={() => setIsOpen(false)} href="#projects" className="text-2xl font-light text-white/70 hover:text-white tracking-[0.3em] uppercase transition-colors duration-500">
              Projects
            </Link>
            <Link onClick={() => setIsOpen(false)} href="#contact" className="text-2xl font-light text-white/70 hover:text-white tracking-[0.3em] uppercase transition-colors duration-500">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}