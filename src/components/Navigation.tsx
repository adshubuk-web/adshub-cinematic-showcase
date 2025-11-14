import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-accent">Adshub</span> Media
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <Button className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors"
            >
              About Us
            </Link>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <Button className="bg-cta text-cta-foreground hover:bg-cta/90 font-medium w-full">
              Get a Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
