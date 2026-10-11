import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Projects from "@/components/project";
import DSA from "@/components/dsa"; 
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <DSA />
      <Contact />
    </main>
  );
}
