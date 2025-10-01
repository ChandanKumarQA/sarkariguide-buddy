import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BankingJobs = () => {
  const jobs = [
    {
      id: "ibps-po-2024",
      title: "IBPS PO (Probationary Officer) 2024",
      organization: "Institute of Banking Personnel Selection",
      location: "All India",
      posts: 4000,
      lastDate: "2024-11-05",
      status: "Active",
      salaryRange: "₹36,000 - ₹63,840",
    },
    {
      id: "sbi-clerk-2024",
      title: "SBI Clerk Recruitment 2024",
      organization: "State Bank of India",
      location: "All India",
      posts: 8500,
      lastDate: "2024-10-28",
      status: "Active",
      salaryRange: "₹19,900 - ₹63,200",
    },
    {
      id: "rbi-assistant-2024",
      title: "RBI Assistant Manager Recruitment 2024",
      organization: "Reserve Bank of India",
      location: "All India",
      posts: 920,
      lastDate: "2024-11-15",
      status: "Active",
      salaryRange: "₹50,000 - ₹1,60,000",
    },
    {
      id: "ibps-clerk-2024",
      title: "IBPS Clerk Recruitment 2024",
      organization: "Institute of Banking Personnel Selection",
      location: "All India",
      posts: 8500,
      lastDate: "2024-10-20",
      status: "Active",
      salaryRange: "₹19,900 - ₹63,200",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Banking Jobs
          </h1>
          <p className="text-muted-foreground text-lg">
            SBI, IBPS, RBI and other banking sector job notifications
          </p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <p className="text-muted-foreground">{job.organization}</p>
                  </div>
                  <Badge className="bg-success text-white">{job.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {job.posts.toLocaleString()} Posts
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Last Date: {new Date(job.lastDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {job.salaryRange}
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Link to={`/job-details/${job.id}`}>
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                  <Button size="sm" className="bg-primary">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BankingJobs;
