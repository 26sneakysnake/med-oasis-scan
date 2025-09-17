import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Users, Rocket, Target, Calendar } from "lucide-react";
import investorsImage from "@/assets/investors-meeting.jpg";

const InvestmentSection = () => {
  return (
    <section id="investissement" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Opportunité d'investissement
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              exceptionnelle
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rejoignez-nous dans la révolution de la santé numérique française. 
            Un marché en forte croissance avec un impact sociétal majeur.
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={investorsImage} 
              alt="Investors Meeting" 
              className="w-full h-80 object-cover rounded-2xl shadow-medical"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Pourquoi investir maintenant ?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Marché en hypercroissance</h4>
                    <p className="text-muted-foreground">+12% de croissance annuelle du marché de la santé numérique</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-medical rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Besoin critique identifié</h4>
                    <p className="text-muted-foreground">28.9% des communes en désert médical, enjeu national prioritaire</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Technologie propriétaire</h4>
                    <p className="text-muted-foreground">IA prédictive avec 95% de précision, avance technologique de 2 ans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Projections financières</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-white shadow-card">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-lg font-bold text-foreground">2024</div>
              <div className="text-2xl font-bold text-accent mb-2">500K€</div>
              <div className="text-sm text-muted-foreground">Chiffre d'affaires</div>
            </Card>
            <Card className="p-6 text-center bg-white shadow-card">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-lg font-bold text-foreground">2025</div>
              <div className="text-2xl font-bold text-primary mb-2">1.5M€</div>
              <div className="text-sm text-muted-foreground">Chiffre d'affaires</div>
            </Card>
            <Card className="p-6 text-center bg-white shadow-card">
              <Calendar className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-lg font-bold text-foreground">2026</div>
              <div className="text-2xl font-bold text-secondary mb-2">3.5M€</div>
              <div className="text-sm text-muted-foreground">Chiffre d'affaires</div>
            </Card>
            <Card className="p-6 text-center bg-white shadow-card">
              <Calendar className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-lg font-bold text-foreground">2027</div>
              <div className="text-2xl font-bold text-success mb-2">8M€</div>
              <div className="text-sm text-muted-foreground">Chiffre d'affaires</div>
            </Card>
          </div>
        </div>

        {/* Investment Round */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Série A - 2M€</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span>Montant recherché</span>
                <span className="font-bold text-accent">2,000,000€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Valorisation pré-money</span>
                <span className="font-bold">8,000,000€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Valorisation post-money</span>
                <span className="font-bold">10,000,000€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Équité proposée</span>
                <span className="font-bold text-accent">20%</span>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h4 className="font-bold mb-3">Utilisation des fonds :</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>• R&D et développement produit</span>
                  <span>40%</span>
                </div>
                <div className="flex justify-between">
                  <span>• Équipe et recrutement</span>
                  <span>35%</span>
                </div>
                <div className="flex justify-between">
                  <span>• Marketing et ventes</span>
                  <span>20%</span>
                </div>
                <div className="flex justify-between">
                  <span>• Opérations</span>
                  <span>5%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Profil d'investisseur recherché</h3>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-l-primary">
                  <h4 className="font-semibold text-foreground">Fonds d'investissement HealthTech</h4>
                  <p className="text-sm text-muted-foreground">Spécialisés dans les technologies de santé</p>
                </Card>
                <Card className="p-4 border-l-4 border-l-secondary">
                  <h4 className="font-semibold text-foreground">Business Angels secteur santé</h4>
                  <p className="text-sm text-muted-foreground">Expérience dans le domaine médical</p>
                </Card>
                <Card className="p-4 border-l-4 border-l-accent">
                  <h4 className="font-semibold text-foreground">Corporate Venture</h4>
                  <p className="text-sm text-muted-foreground">Assureurs, mutuelles, laboratoires</p>
                </Card>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-success/10 to-secondary/10 rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3">Avantages investisseurs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>ROI projeté : 8x sur 5 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Marché adressable : 2.1Md€</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Impact sociétal mesurable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Barrières à l'entrée élevées</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-accent rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-accent-foreground mb-4">
            Prêt à révolutionner la santé française ?
          </h3>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour construire l'avenir de l'accès aux soins en France. 
            Une opportunité unique d'investir dans l'innovation à impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:ilyessassadi78@gmail.com">
                <DollarSign className="w-5 h-5" />
                Investir maintenant
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="https://www.canva.com/design/DAGnjKdQLbo/xUrc7tERng-lGrkqV-ePLQ/view?utm_content=DAGnjKdQLbo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h14f6d910c2" target="_blank" rel="noopener noreferrer">
                Télécharger le pitch deck
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;