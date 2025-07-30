import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Une équipe
            <span className="block bg-gradient-medical bg-clip-text text-transparent">
              d'exception
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des experts reconnus en IA, santé publique et entrepreneuriat, 
            unis pour révolutionner l'accès aux soins en France.
          </p>
        </div>

        {/* Founding Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-white shadow-medical hover:shadow-glow transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-110 transition-transform">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGVi_gfYNVqyw/profile-displayphoto-crop_800_800/B4EZfVxVyxGcAM-/0/1751638171456?e=1756944000&v=beta&t=SYAkLGIzAAjkdh7vKVjSuYlcqZNkIIrWK9TiVrV3YEM"
                alt="Ilyess ASSADI"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Ilyess ASSADI</h3>
            <div className="text-primary font-medium mb-4">CEO & Co-fondateur</div>
            <p className="text-sm text-muted-foreground mb-6">
              Alternant Air France 
              ESILV - Industrie & Robotique
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-xs text-accent">
                <Award className="w-3 h-3" />
                <span>Prix Innovation Santé 2023</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        
          <Card className="p-8 text-center bg-white shadow-medical hover:shadow-glow transition-all duration-300 group">
            <div className="w-24 h-24 bg-gradient-medical rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
              JD
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Jean DUBOIS</h3>
            <div className="text-secondary font-medium mb-4">CTO & Co-fondateur</div>
            <p className="text-sm text-muted-foreground mb-6">
              Ex-Lead Data Scientist chez Doctolib. 
              Ingénieur Polytechnique, spécialiste IA appliquée à la santé.
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-xs text-success">
                <GraduationCap className="w-3 h-3" />
                <span>PhD Machine Learning</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        
          <Card className="p-8 text-center bg-white shadow-medical hover:shadow-glow transition-all duration-300 group">
            <div className="w-24 h-24 bg-gradient-success rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
              MR
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Marie ROUSSEAU</h3>
            <div className="text-success font-medium mb-4">COO & Co-fondatrice</div>
            <p className="text-sm text-muted-foreground mb-6">
              Ex-consultante McKinsey Healthcare. 
              HEC Paris, spécialiste transformation digitale secteur santé.
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-xs text-primary">
                <Award className="w-3 h-3" />
                <span>40 under 40 Healthcare</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Advisory Board */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Conseil consultatif</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                PL
              </div>
              <div>
                <h4 className="font-bold text-foreground">Prof. Pierre LAURENT</h4>
                <div className="text-accent font-medium">Directeur IRDES</div>
                <p className="text-sm text-muted-foreground">Expert national des politiques de santé</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                SB
              </div>
              <div>
                <h4 className="font-bold text-foreground">Sophie BERNARD</h4>
                <div className="text-primary font-medium">Ex-CEO Withings</div>
                <p className="text-sm text-muted-foreground">Experte HealthTech & levées de fonds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">Collaborateurs</div>
          </Card>
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-secondary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Data Scientists</div>
          </Card>
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-accent mb-2">4</div>
            <div className="text-sm text-muted-foreground">Experts santé</div>
          </Card>
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-success mb-2">12</div>
            <div className="text-sm text-muted-foreground">Années d'expérience moyenne</div>
          </Card>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-medical rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Reconnaissance & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="font-bold text-xl mb-2">Prix Innovation</h4>
              <p className="text-white/90">French Tech 2024</p>
            </div>
            <div>
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="font-bold text-xl mb-2">Startup of the Year</h4>
              <p className="text-white/90">HealthTech Awards 2024</p>
            </div>
            <div>
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="font-bold text-xl mb-2">Bourse French Tech</h4>
              <p className="text-white/90">500K€ - Deeptech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;