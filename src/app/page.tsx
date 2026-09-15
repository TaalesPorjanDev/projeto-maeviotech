import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";



export default function Home() {
  return (
     <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <WorksSection />
      <ContactSection/>
      <Footer />
    </div>
  );
}
