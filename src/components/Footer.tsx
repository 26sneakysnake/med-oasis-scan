import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-['Inter']">M</span>
              </div>
              <span className="text-xl font-bold">Medical'IA</span>
            </div>
            <p className="text-white/70">
              L'intelligence artificielle au service de l'accès aux soins en France.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#problematique" className="block text-white/70 hover:text-white transition-colors">
                Problématique
              </a>
              <a href="#solution" className="block text-white/70 hover:text-white transition-colors">
                Solution
              </a>
              <a href="#investissement" className="block text-white/70 hover:text-white transition-colors">
                Investissement
              </a>
              <a href="#equipe" className="block text-white/70 hover:text-white transition-colors">
                Équipe
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4">Solutions</h4>
            <div className="space-y-2">
              <div className="text-white/70">Analyse prédictive</div>
              <div className="text-white/70">Dashboard territorial</div>
              <div className="text-white/70">API données santé</div>
              <div className="text-white/70">Consulting expertise</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4" />
                <span>contact@medical-ia.fr</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm">
            © 2024 Medical'IA. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm text-white/70 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;