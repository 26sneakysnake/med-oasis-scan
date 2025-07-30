import { Card } from "@/components/ui/card";
import { AlertTriangle, MapPin, Users, Clock } from "lucide-react";

const ProblematiqueSection = () => {
  return (
    <section id="problematique" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Un enjeu national
            <span className="block text-primary">critique</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les déserts médicaux touchent près d'un tiers des communes françaises, 
            créant des inégalités d'accès aux soins majeures.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center bg-gradient-to-b from-primary/5 to-primary/10 border-primary/20 hover:shadow-medical transition-all duration-300 animate-scale-in">
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">28.9%</div>
            <div className="text-sm text-muted-foreground">des communes françaises</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-b from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.1s'}}>
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">8.5M</div>
            <div className="text-sm text-muted-foreground">de Français concernés</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-b from-accent/5 to-accent/10 border-accent/20 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <div className="text-3xl font-bold text-accent mb-2">45min</div>
            <div className="text-sm text-muted-foreground">temps d'accès moyen</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-b from-success/5 to-success/10 border-success/20 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
            <MapPin className="w-12 h-12 text-success mx-auto mb-4" />
            <div className="text-3xl font-bold text-success mb-2">12%</div>
            <div className="text-sm text-muted-foreground">de croissance annuelle</div>
          </Card>
        </div>

        {/* APL Explanation */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">L'indice APL : Notre référentiel</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                L'Accessibilité Potentielle Localisée (APL) est l'indicateur officiel qui mesure 
                l'adéquation entre l'offre et la demande de soins sur un territoire.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Densité de professionnels de santé</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Temps d'accès aux soins</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Caractéristiques démographiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span>Infrastructures de transport</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="h-64 bg-gradient-to-b from-success/20 via-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🗺️</div>
                  <div className="text-sm text-muted-foreground">Visualisation APL par commune</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Une opportunité de marché majeure</h3>
          <p className="text-xl mb-8 text-white/90">
            Le marché de la santé numérique en France représente 2.1 milliards d'euros 
            avec une croissance annuelle de 12%.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2.1Md€</div>
              <div className="text-white/80">Marché santé numérique</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">+12%</div>
              <div className="text-white/80">Croissance annuelle</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">150M€</div>
              <div className="text-white/80">Investissements 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblematiqueSection;