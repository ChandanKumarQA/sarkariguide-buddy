import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Train, 
  Shield, 
  GraduationCap, 
  Briefcase, 
  Heart,
  Scale,
  Users
} from "lucide-react";

const categories = [
  {
    title: "Railway Jobs",
    icon: Train,
    count: 245,
    description: "Indian Railways recruitment notifications",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
  },
  {
    title: "Banking",
    icon: Building2,
    count: 189,
    description: "SBI, IBPS, RBI job notifications",
    color: "bg-green-500",
    lightColor: "bg-green-50",
  },
  {
    title: "Defence",
    icon: Shield,
    count: 156,
    description: "Army, Navy, Air Force recruitments",
    color: "bg-red-500",
    lightColor: "bg-red-50",
  },
  {
    title: "Teaching",
    icon: GraduationCap,
    count: 298,
    description: "Teaching jobs in govt schools & colleges",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
  },
  {
    title: "SSC Jobs",
    icon: Briefcase,
    count: 167,
    description: "Staff Selection Commission posts",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
  },
  {
    title: "Healthcare",
    icon: Heart,
    count: 123,
    description: "Medical officer & nursing positions",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
  },
  {
    title: "Judicial",
    icon: Scale,
    count: 87,
    description: "Court clerk & judicial officer posts",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
  },
  {
    title: "UPSC",
    icon: Users,
    count: 45,
    description: "Civil services & IAS/IPS positions",
    color: "bg-teal-500",
    lightColor: "bg-teal-50",
  },
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Browse Jobs by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore government job opportunities across various sectors and departments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer border border-border"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${category.lightColor}`}>
                      <IconComponent className={`h-6 w-6 text-${category.color.split('-')[1]}-500`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count} jobs
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;