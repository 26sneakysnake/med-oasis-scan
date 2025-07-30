import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Medical AI Technology" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-success/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-glass rounded-full px-6 py-3 text-white border border-white/20">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Révolutionner l'accès aux soins en France</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            L'IA qui combat les
            <span className="block bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
              déserts médicaux
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Medical'IA utilise l'intelligence artificielle pour analyser et prédire les déserts médicaux en France, 
            permettant une allocation optimale des ressources de santé sur tout le territoire.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
            <div className="bg-white/10 backdrop-blur-glass rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent">28.9%</div>
              <div className="text-white/80">Communes en désert médical</div>
            </div>
            <div className="bg-white/10 backdrop-blur-glass rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-success">2.1M€</div>
              <div className="text-white/80">Marché addressable</div>
            </div>
            <div className="bg-white/10 backdrop-blur-glass rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/80">Précision prédictive</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button variant="accent" size="xl" className="animate-pulse-glow">
              Opportunité d'investissement
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              <Play className="w-5 h-5" />
              Voir la démo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-12 text-white/70">
            <p className="text-sm mb-4">Soutenu par</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="px-4 py-2 bg-white/10 rounded-lg">Mairie de Nanterre</div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">Ramsey Santé </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">ARS Ile-de-France</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;