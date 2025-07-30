import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblematiqueSection from "@/components/ProblematiqueSection";
import SolutionSection from "@/components/SolutionSection";
import InvestmentSection from "@/components/InvestmentSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblematiqueSection />
      <SolutionSection />
      <InvestmentSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
