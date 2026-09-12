import { AboutSection } from "@/components/AboutSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";



export default function Home() {
  return (
     <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
