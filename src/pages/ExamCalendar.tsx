import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const examSchedule = [
  {
    id: "ssc-cgl-tier1-2024",
    title: "SSC CGL Tier-1 Exam",
    organization: "Staff Selection Commission",
    date: "2024-09-25",
    time: "10:00 AM - 1:00 PM",
    status: "Upcoming",
    location: "All India",
  },
  {
    id: "rrb-ntpc-2024",
    title: "RRB NTPC Exam",
    organization: "Railway Recruitment Board",
    date: "2024-10-15",
    time: "9:00 AM - 12:00 PM", 
    status: "Upcoming",
    location: "All India",
  },
  {
    id: "ibps-clerk-prelims-2024",
    title: "IBPS Clerk Prelims",
    organization: "Institute of Banking Personnel Selection",
    date: "2024-11-02",
    time: "9:00 AM - 12:00 PM",
    status: "Upcoming",
    location: "All India",
  }
];

const ExamCalendar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Exam Calendar</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Exam Calendar 2024
              </h1>
              <p className="text-muted-foreground">
                Stay updated with upcoming government exam dates
              </p>
            </div>
            
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {examSchedule.map((exam, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {exam.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {exam.organization}
                      </p>
                    </div>
                    <Badge className="bg-success text-white">
                      {exam.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {new Date(exam.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {exam.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {exam.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Badge variant="outline">Government Exam</Badge>
                    <Link to={`/job-details/${exam.id}`}>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExamCalendar;