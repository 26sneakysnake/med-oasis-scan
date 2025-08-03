import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblematiqueSection from "@/components/ProblematiqueSection";
import SolutionSection from "@/components/SolutionSection";
import DemonstrationSection from "@/components/DemonstrationSection";
import TarifsSection from "@/components/TarifsSection";
import TeamSection from "@/components/TeamSection";
import InvestmentSection from "@/components/InvestmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblematiqueSection />
      <SolutionSection />
      <DemonstrationSection />
      <TarifsSection />
      <TeamSection />
      <InvestmentSection />
      <Footer />
    </div>
  );
};

export default Index;
