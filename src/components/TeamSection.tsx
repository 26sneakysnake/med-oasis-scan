import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import ilyessPhoto from "@/assets/ilyess-photo.jpg";
import seifeddinePhoto from "@/assets/seifeddine-photo.jpg";
import badrPhoto from "@/assets/badr-photo.jpg";
import prixInnovationImage from "@/assets/prix-innovation-pold.jpg";
import prixKeskiaImage from "@/assets/prix-keskia.jpg";

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
                src={ilyessPhoto}
                alt="Ilyess ASSADI"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Ilyess ASSADI</h3>
            <div className="text-primary font-medium mb-4">CEO & Co-fondateur</div>
            <p className="text-sm text-muted-foreground mb-6">
              Alternant Air France<br />
              ESILV - Industrie & Robotique
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" variant="outline" className="p-2" asChild>
                <a href="https://www.linkedin.com/in/ilyess-assadi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" className="p-2" asChild>
                <a href="mailto:ilyessassadi78@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 text-center bg-white shadow-medical hover:shadow-glow transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-110 transition-transform">
              <img 
                src={seifeddinePhoto}
                alt="Seifeddine BEN RHOUMA"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Seifeddine BEN RHOUMA</h3>
            <div className="text-secondary font-medium mb-4">CTO & Co-fondateur</div>
            <p className="text-sm text-muted-foreground mb-6">
              Ingénieur IA<br />
              ESILV - Data & IA
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" variant="outline" className="p-2" asChild>
                <a href="https://www.linkedin.com/in/seifeddine-ben/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" className="p-2" asChild>
                <a href="mailto:seifbr26@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        
          <Card className="p-8 text-center bg-white shadow-medical hover:shadow-glow transition-all duration-300 group">
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-110 transition-transform">
              <img 
                src={badrPhoto}
                alt="Badr AGRAD"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Badr AGRAD</h3>
            <div className="text-success font-medium mb-4">Business Manager & Co-fondateur</div>
            <p className="text-sm text-muted-foreground mb-6">
              Alternant Allianz France<br />
              ESILV - Data & IA
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" variant="outline" className="p-2" asChild>
                <a href="https://www.linkedin.com/in/badr-agrad-9274b4208/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" className="p-2" asChild>
                <a href="mailto:badragrad@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>


        {/* Team Stats */}
        <div className="flex justify-center gap-8 mb-16">
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Collaborateurs</div>
          </Card>
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-secondary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Data Scientists</div>
          </Card>
          <Card className="p-6 text-center bg-white shadow-card">
            <div className="text-3xl font-bold text-accent mb-2">6</div>
            <div className="text-sm text-muted-foreground">Experts santé</div>
          </Card>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-medical rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Reconnaissance & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={prixInnovationImage}
                  alt="Prix Innovation POLD"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-xl mb-2">Prix Innovation</h4>
              <p className="text-white/90">POLD (Paris Ouest La-Défense)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={prixKeskiaImage}
                  alt="2ème place KESK'IA"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-xl mb-2">2ème place</h4>
              <p className="text-white/90">Concours national KESK'IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;