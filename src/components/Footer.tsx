import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-heading text-primary mb-4">
              BakeryHaven
            </h3>
            <p className="text-muted-foreground mb-4">
              Homemade treats baked fresh every day with love. Quality
              ingredients, traditional recipes, and heartfelt service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Order Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>Jl. Manis No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={20} className="flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={20} className="flex-shrink-0" />
                <span>hello@dapoermanis.com</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <Clock size={20} className="mt-0.5 flex-shrink-0" />
                <span>Open daily 9 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} BakeryHaven. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
