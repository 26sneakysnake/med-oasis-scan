import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Building, Building2, MapPin, Cloud, Shield, GraduationCap, Zap } from "lucide-react";

const TarifsSection = () => {
  const plans = [
    {
      icon: Building,
      title: "Communes < 25 000 habitants",
      price: "350€",
      unit: "/mois",
      description: "14€ par 1000 habitants",
      subtitle: "Petites communautés avec tarif accessible",
      features: [
        "Fonctionnalités essentielles",
        "Dashboard de base",
        "Données APL en temps réel",
        "Support par email",
        "Formation initiale incluse"
      ],
      popular: false
    },
    {
      icon: Building2,
      title: "25 000 à 100 000 habitants",
      price: "1000€",
      unit: "/mois",
      description: "10€ par 1000 habitants",
      subtitle: "Villes moyennes avec frais modérés",
      features: [
        "Fonctionnalités avancées",
        "Dashboard complet + analytics",
        "Prédictions territoriales",
        "Support téléphonique prioritaire",
        "Formation personnalisée",
        "Rapports automatisés"
      ],
      popular: true
    },
    {
      icon: MapPin,
      title: "> 100 000 habitants ou ARS",
      price: "Sur devis",
      unit: "",
      description: "Tarification adaptée à vos besoins",
      subtitle: "Grandes villes et ARS avec tarifs personnalisés",
      features: [
        "Suite complète de fonctionnalités",
        "Dashboard multi-niveaux",
        "IA prédictive avancée",
        "Support dédié 24/7",
        "Formation équipe complète",
        "Intégration systèmes existants",
        "Rapports sur mesure"
      ],
      popular: false
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: "Hébergement cloud sécurisé",
      description: "Infrastructure haute disponibilité avec sauvegarde automatique"
    },
    {
      icon: Zap,
      title: "API Mistral AI intégrée",
      description: "Intelligence artificielle de pointe pour l'analyse prédictive"
    },
    {
      icon: GraduationCap,
      title: "Formation personnalisée",
      description: "Accompagnement complet de vos équipes à l'utilisation de la plateforme"
    },
    {
      icon: Shield,
      title: "Certification HDS",
      description: "Hébergeur de données de santé conforme aux exigences réglementaires"
    }
  ];

  return (
    <section id="tarifs" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Un modèle SaaS adapté aux
            <span className="block text-primary">collectivités</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tarification transparente et progressive selon la taille de votre territoire. 
            Tous nos abonnements incluent les services essentiels.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/5 to-primary/10 border-primary/30 shadow-medical' 
                  : 'bg-gradient-to-b from-white to-muted/20 border-muted/30'
              } hover:shadow-glow transition-all duration-300 animate-scale-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <plan.icon className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
                <p className="text-sm font-medium text-accent mb-2">{plan.description}</p>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-success'} flex-shrink-0`} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.price === "Sur devis" ? "Demander un devis" : "Choisir ce plan"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Services Included */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Services inclus dans tous nos abonnements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Prêt à optimiser votre territoire ?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Rejoignez les collectivités qui font confiance à Médical'IA pour 
              améliorer l'accès aux soins de leurs citoyens.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="xl">
                Demander une démonstration
              </Button>
              <Button variant="glass" size="xl">
                Télécharger la brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;