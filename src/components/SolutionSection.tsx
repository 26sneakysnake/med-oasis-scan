import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, Target, BarChart3, Zap, Shield } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Medical'IA : L'IA au service de
            <span className="block bg-gradient-medical bg-clip-text text-transparent">
              l'accès aux soins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre plateforme révolutionnaire combine intelligence artificielle et données 
            territoriales pour optimiser la répartition des soins de santé.
          </p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-b from-primary/5 to-transparent border-primary/20 hover:shadow-medical transition-all duration-300 group animate-scale-in">
            <Database className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-foreground mb-4">Collecte exhaustive</h3>
            <p className="text-muted-foreground">
              Agrégation automatisée de données provenant des ARS, DREES, IRDES 
              et autres sources officielles.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-to-b from-secondary/5 to-transparent border-secondary/20 hover:shadow-glow transition-all duration-300 group animate-scale-in" style={{animationDelay: '0.1s'}}>
            <Brain className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-foreground mb-4">IA prédictive</h3>
            <p className="text-muted-foreground">
              Algorithmes d'apprentissage automatique identifiant les patterns 
              invisibles pour une analyse territoriale précise.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-to-b from-accent/5 to-transparent border-accent/20 hover:shadow-glow transition-all duration-300 group animate-scale-in" style={{animationDelay: '0.2s'}}>
            <Target className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-foreground mb-4">Solutions territorialisées</h3>
            <p className="text-muted-foreground">
              Recommandations personnalisées selon les spécificités 
              socio-économiques de chaque territoire.
            </p>
          </Card>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-card mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Architecture technologique</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">
                Modèles prédictifs avancés utilisant TensorFlow et scikit-learn
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Big Data</h4>
              <p className="text-sm text-muted-foreground">
                Pipeline de données massives avec Apache Spark et Elasticsearch
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Sécurité</h4>
              <p className="text-sm text-muted-foreground">
                Conformité RGPD et HDS avec chiffrement end-to-end
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Dashboard d'analyse interactive
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Interface intuitive permettant aux décideurs publics d'explorer 
                les données territoriales et d'évaluer l'impact de leurs politiques.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Cartographie interactive des déserts médicaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Simulations de scénarios d'implantation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Prédictions à 5 ans par territoire</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">ROI des investissements en santé</span>
                </div>
              </div>
              <Button variant="hero" size="lg">
                Découvrir la démo
              </Button>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-medical">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/4wBMccmx/Capture-decran-2025-05-08-140504.png" 
                  alt="Dashboard Medical'IA - Interface de visualisation" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="text-center bg-gradient-success rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-8">Résultats prouvés</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-accent mb-4">95%</div>
              <div className="text-lg text-white/90">Précision des prédictions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-4">3x</div>
              <div className="text-lg text-white/90">Plus rapide que les méthodes actuelles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-4">40%</div>
              <div className="text-lg text-white/90">Réduction des coûts d'analyse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;