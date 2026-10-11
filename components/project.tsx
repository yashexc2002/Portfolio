"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiExpress, 
  SiTypescript, 
  SiFramer, 
  SiHtml5, 
  SiCss, 
  SiJavascript,
  SiTensorflow 
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";

const projectsData = [
  { 
    id: "01", 
    title: "Air Juggler", 
    desc: "Hand-tracking interactive experience powered by computer vision.",
    link: "https://air-juggler-game-lac.vercel.app/",
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MediaPipe", icon: TbBrain },
      { name: "TensorFlow.js", icon: SiTensorflow }
    ]
  },
  { 
    id: "02", 
    title: "Reflex Flow", 
    desc: "A fast-paced reaction time challenge with fluid animations.",
    link: "https://reflex-game-livid.vercel.app/",
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Framer", icon: SiFramer },
    ]
  },
  { 
    id: "03", 
    title: "Shopvilla", 
    desc: "Full-stack hybrid e-commerce platform with secure payments.",
    link: "https://e-commerical-nextjs.vercel.app/",
    stack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ]
  },
  { 
    id: "04", 
    title: "Todo-List", 
    desc: "Minimalist task management utilizing local browser storage.",
    link: "https://todo-list-project-nu-silk.vercel.app/",
    stack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Vanilla JS", icon: SiJavascript },
    ]
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#030303] flex flex-col w-full py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 mb-16"
      >
        <p className="text-xs md:text-sm text-gray-500 tracking-[0.3em] uppercase">
          Projects
        </p>
      </motion.div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 px-6 md:px-12 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[60vh] md:h-[70vh] bg-transparent border border-white/20 p-8 md:p-12 flex flex-col justify-between group hover:border-white/50 transition-colors duration-700"
          >
            <div>
              <span className="text-white/40 tracking-[0.5em] text-xs md:text-sm mb-8 block font-light">
                {project.id}
              </span>
              <h3 className="text-4xl md:text-6xl font-light text-white/90 tracking-tighter mb-6 leading-tight">
                {project.title}
              </h3>
              <p className="text-white/50 font-light text-sm md:text-base mb-8">
                {project.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
                {project.stack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/40">
                    <tech.icon className="text-base md:text-lg" />
                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase">{tech.name}</span>
                  </div>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-500"
              >
                Explore Live <span className="text-lg font-light">↗</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 mt-4 flex items-center gap-4"
      >
        <span className="text-[10px] md:text-xs text-white/40 tracking-[0.3em] uppercase">
          Drag to explore
        </span>
        <motion.div 
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40 text-lg md:text-xl font-light -mt-1"
        >
          ⟶
        </motion.div>
      </motion.div>
    </section>
  );
}
