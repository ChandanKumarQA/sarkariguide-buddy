import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://thumbs.dreamstime.com/b/sgj-logo-sgj-letter-sgj-letter-logo-design-initials-sgj-logo-linked-circle-uppercase-monogram-logo-sgj-typography-394766366.jpg?w=768"
                alt="SarkariGuide Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">SarkariGuide</h3>
                <p className="text-xs text-muted-foreground">Government Jobs Portal</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Your trusted platform for government job notifications, exam updates, and career guidance in the public sector.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Latest Jobs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Exam Results</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Admit Cards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Syllabus</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Previous Papers</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Railway Jobs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Banking</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SSC</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">UPSC</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Defence</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SarkariGuide. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
