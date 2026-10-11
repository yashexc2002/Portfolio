"use client";

import {motion} from "framer-motion";

export default function Home(){
    return(
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
            <motion.div
            initial = {{opacity:0,y:30}}
            animate = {{opacity:1,y:0}}
            transition={{duration:1,ease:"easeOut"}}
            className="text-center" 
            >

                <h1 className="text-4xl md:text-6xl tracking-widest font-light text-white/90 uppercase mb-4">
                    Yash Oberoi
                </h1>

                <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase">
                    Crafting Scalable Web & AI
                </p>

             </motion.div>   
        </section>
    )
}