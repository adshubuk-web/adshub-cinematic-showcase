import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/adshub-logo.png";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Adshub Media Logo" className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform" />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-accent group-hover:animate-glow">Adshub</span> Media
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`relative text-foreground hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}>
              Home
              {isActive('/') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in" />}
            </Link>
            <Link to="/portfolio" className={`relative text-foreground hover:text-accent transition-colors ${isActive('/portfolio') ? 'text-accent' : ''}`}>
              Portfolio
              {isActive('/portfolio') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in" />}
            </Link>
            <Link to="/about" className={`relative text-foreground hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`}>
              About Us
              {isActive('/about') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in" />}
            </Link>
            
            <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium hover-glow">
              <a href="https://wa.me/918116038240" target="_blank" rel="noopener noreferrer">
                Get a Quote
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground hover:text-accent transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in glass-card p-4 rounded-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-foreground hover:text-accent transition-colors ${isActive('/') ? 'text-accent font-bold' : ''}`}>
              Home
            </Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className={`text-foreground hover:text-accent transition-colors ${isActive('/portfolio') ? 'text-accent font-bold' : ''}`}>
              Portfolio
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-foreground hover:text-accent transition-colors ${isActive('/about') ? 'text-accent font-bold' : ''}`}>
              About Us
            </Link>
            <a href="https://wa.me/918116038240" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium w-full hover-glow">
              <a href="https://wa.me/918116038240" target="_blank" rel="noopener noreferrer">
                Get a Quote
              </a>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;