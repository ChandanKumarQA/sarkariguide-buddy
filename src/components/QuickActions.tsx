import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Download, 
  Calendar, 
  Bell, 
  Search,
  BookOpen
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: FileText,
      title: "Application Forms",
      description: "Download latest job application forms",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      link: "/",
    },
    {
      icon: Download,
      title: "Admit Cards", 
      description: "Download your exam admit cards",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      link: "/",
    },
    {
      icon: Calendar,
      title: "Exam Calendar",
      description: "View upcoming exam dates",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      link: "/exam-calendar",
    },
    {
      icon: Bell,
      title: "Job Alerts",
      description: "Set up personalized job notifications",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      link: "/",
    },
    {
      icon: Search,
      title: "Job Search",
      description: "Advanced job search filters",
      color: "bg-red-500",
      lightColor: "bg-red-50",
      link: "/job-search",
    },
    {
      icon: BookOpen,
      title: "Study Material",
      description: "Free study materials and guides",
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      link: "/",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Access essential tools and resources for your government job preparation
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Tools
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${action.lightColor} shrink-0`}>
                      <IconComponent className={`h-6 w-6 text-${action.color.split('-')[1]}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {action.description}
                      </p>
                      <Link to={action.link}>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                          Access Now →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;