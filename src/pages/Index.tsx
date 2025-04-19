import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';
import SpaceScene from '@/components/SpaceScene';

const Index = () => {
  useEffect(() => {
    document.title = "Shubham Kumar - Computer Science Student & Data Analyst";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-space-dark">
      <StarBackground />
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="py-12 bg-space-darker relative z-10">
          <div className="container mx-auto px-4">
            <SpaceScene />
          </div>
        </div>
        
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
