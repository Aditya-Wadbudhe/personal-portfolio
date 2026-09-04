import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}