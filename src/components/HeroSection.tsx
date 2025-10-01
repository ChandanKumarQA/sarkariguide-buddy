import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-light to-secondary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content — removed as requested */}
          <div />

          {/* Right Content - Stats Cards (keep or add content later) */}
          <div>
            {/* Add your stats cards or graphics here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
