import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import logo from "@/assets/adshub-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Adshub Media Logo" 
                className="h-10 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold">
                <span className="text-accent">Adshub</span> Media
              </h3>
            </div>
            <p className="text-muted-foreground">
              Professional video editing, 3D animation & AI-powered videos for brands and creators.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <p className="text-muted-foreground">Video Editing</p>
              <p className="text-muted-foreground">3D Animation</p>
              <p className="text-muted-foreground">Motion Graphics</p>
              <p className="text-muted-foreground">AI Video Editing</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:adshubuk@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail size={18} />
                adshubuk@gmail.com
              </a>
              <a href="tel:+447350054689" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Phone size={18} />
                +44 7350 054689
              </a>
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://www.instagram.com/adshub.media?igsh=NWh5d2VkbTNqc2Vn&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@adshub.media?_r=1&_t=ZN-91PeL3hJPug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Visit our TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adshub Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
