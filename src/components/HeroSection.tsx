import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp } from "lucide-react";
const HeroSection = () => {
  return <section className="bg-gradient-to-br from-primary-light to-secondary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-4 bg-accent text-accent-foreground">
              🔥 Latest Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Gateway to
              <span className="text-primary block">Jobs</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Stay updated with the latest government job notifications, exam results, and important dates. Your career in public service starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Browse Latest Jobs
              </Button>
              <Button variant="outline" size="lg">
                Check Results
              </Button>
            </div>
            <div className="mt-6">
              <Button variant="ghost" className="text-primary hover:text-primary/80 font-semibold">
                View All Job Categories →
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          
        </div>
      </div>
    </section>;
};
export default HeroSection;