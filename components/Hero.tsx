"use client";

import {motion} from "framer-motion";
import Image from "next/image";

export default function Home(){
    return(
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl sm:h-96 sm:w-96"
            />
            <motion.div
            initial = {{opacity:0,y:30}}
            animate = {{opacity:1,y:0}}
            transition={{duration:1,ease:"easeOut"}}
            className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                    className="mb-9 rounded-full border border-white/15 bg-white/[0.03] p-2 shadow-[0_0_0_8px_rgba(255,255,255,0.02)]"
                >
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-white/10 sm:h-36 sm:w-36">
                        <Image
                            src="/profile.jpg"
                            alt="Portrait of Yash Oberoi"
                            fill
                            priority
                            sizes="(max-width: 640px) 112px, 144px"
                            className="object-cover object-center grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                        />
                    </div>
                </motion.div>

                <h1 className="mb-4 text-4xl font-light tracking-widest text-white/90 uppercase md:text-6xl">
                    Yash Oberoi
                </h1>

                <p className="text-sm tracking-widest text-gray-400 uppercase md:text-base">
                    Crafting Scalable Web & AI
                </p>

             </motion.div>   
        </section>
    )
}