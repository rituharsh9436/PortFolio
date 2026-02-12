import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CodingProfilesSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
