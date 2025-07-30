import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">Medical'IA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problematique" className="text-foreground hover:text-primary transition-colors font-medium">
              Problématique
            </a>
            <a href="#solution" className="text-foreground hover:text-primary transition-colors font-medium">
              Solution
            </a>
            <a href="#investissement" className="text-foreground hover:text-primary transition-colors font-medium">
              Investissement
            </a>
            <a href="#equipe" className="text-foreground hover:text-primary transition-colors font-medium">
              Équipe
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Démo
            </Button>
            <Button variant="hero" size="sm">
              Investir
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;