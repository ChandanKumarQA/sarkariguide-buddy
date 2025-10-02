import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://thumbs.dreamstime.com/b/sgj-logo-sgj-letter-sgj-letter-logo-design-initials-sgj-logo-linked-circle-uppercase-monogram-logo-sgj-typography-394766366.jpg?w=768"
              alt="SGJ Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">SarkariGuide</h1>
              <p className="text-xs text-muted-foreground">Jobs Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/all-jobs" className="text-muted-foreground hover:text-primary transition-colors">
              Latest Job
            </a>
            <a href="/admit-cards" className="text-muted-foreground hover:text-primary transition-colors">
              Admit Card
            </a>
            <a href="/results" className="text-muted-foreground hover:text-primary transition-colors">
              Result
            </a>
            <a href="/admissions" className="text-muted-foreground hover:text-primary transition-colors">
              Admission
            </a>
            <a href="/syllabus" className="text-muted-foreground hover:text-primary transition-colors">
              Syllabus
            </a>
            <a href="/answer-key" className="text-muted-foreground hover:text-primary transition-colors">
              Answer Key
            </a>
            <a href="/current-affairs" className="text-muted-foreground hover:text-primary transition-colors">
              Current Affairs
            </a>
          </nav>

          {/* Search Button / Icon */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost">
              <Search className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
