import { Button } from "@/components/ui/button";
import { Search, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg font-bold text-xl">
              SG
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SarkariGuide</h1>
              <p className="text-xs text-muted-foreground">Government Jobs Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Latest Jobs
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Results
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Admit Cards
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Syllabus
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
              <span className="ml-2">Search</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4" />
              <span className="ml-2 hidden md:inline">Login</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;