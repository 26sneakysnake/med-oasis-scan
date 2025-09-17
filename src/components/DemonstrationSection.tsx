import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Map, 
  Target, 
  Users, 
  GitBranch, 
  TrendingUp, 
  FileText, 
  MessageSquare,
  Zap,
  BarChart3,
  Shield
} from "lucide-react";
import solutionScreenImage from "@/assets/solution-screen.png";

const DemonstrationSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Dashboard National",
      description: "Établir une vue centralisée des données à l'échelle nationale."
    },
    {
      icon: Map,
      title: "Cartographies interactives",
      description: "Créer des représentations visuelles des données territoriales."
    },
    {
      icon: Target,
      title: "Analyse Territoriale",
      description: "Effectuer une analyse approfondie des caractéristiques territoriales."
    },
    {
      icon: Users,
      title: "Analyse Socio-démographique",
      description: "Examiner les tendances et les données démographiques."
    },
    {
      icon: GitBranch,
      title: "Clustering des Territoires",
      description: "Regrouper les territoires en fonction de caractéristiques similaires."
    },
    {
      icon: TrendingUp,
      title: "Prédictions & Score de Risque",
      description: "Développer des modèles prédictifs et évaluer les risques."
    },
    {
      icon: FileText,
      title: "Génération de Rapports",
      description: "Produire des rapports complets basés sur les analyses."
    },
    {
      icon: MessageSquare,
      title: "Assistant IA",
      description: "Intégrer un chatbot IA pour l'assistance et l'automatisation."
    }
  ];

  return (
    <section id="demonstration" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Découvrez Médical'IA
            <span className="block text-primary">en action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre plateforme offre un ensemble complet d'outils d'analyse 
            pour optimiser l'accès aux soins sur votre territoire.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-b from-white to-muted/20 border-primary/10 hover:shadow-medical transition-all duration-300 group animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Dashboard Showcase */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Interface intuitive et complète
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Visualisez les déserts médicaux, analysez les tendances et prenez 
                des décisions éclairées grâce à notre dashboard interactif.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Cartes interactives avec données en temps réel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Filtres avancés par spécialité médicale</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Export des données et rapports PDF</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground">API intégrée pour vos systèmes existants</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://www.loom.com/share/33663b8c1a974b8da1c5a17b73eff71f" target="_blank" rel="noopener noreferrer">
                    Découvrir la démo
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:ilyessassadi78@gmail.com">
                    Demander une démonstration
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-medical">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={solutionScreenImage} 
                  alt="Interface démonstration Médical'IA" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Spécifications techniques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Performance</h4>
              <p className="text-sm text-muted-foreground">
                Traitement de données en temps réel avec mise à jour automatique
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Données</h4>
              <p className="text-sm text-muted-foreground">
                Sources officielles : ARS, DREES, IRDES, INSEE
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Sécurité</h4>
              <p className="text-sm text-muted-foreground">
                Hébergement sécurisé HDS et conformité RGPD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemonstrationSection;