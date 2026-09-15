import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorksSection } from "@/components/WorksSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desenvolvimento Web para Pequenas e Médias Empresas",
  description:
    "Desenvolvemos sites e sistemas web sob medida para empresas que querem vender mais e se destacar online.",
};



export default function Home() {
  return (
     <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <WorksSection />
      <ContactSection/>
      <Footer />
    </main>
  );
}
