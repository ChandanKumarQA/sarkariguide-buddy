import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const JudicialJobs = () => {
  const jobs = [
    {
      id: "delhi-hc-judicial-2024",
      title: "Delhi High Court Judicial Service Examination 2024",
      organization: "Delhi High Court",
      location: "Delhi",
      posts: 45,
      lastDate: "2024-11-15",
      status: "Active",
      salaryRange: "₹77,840 - ₹1,25,200",
    },
    {
      id: "up-judicial-2024",
      title: "UP Judicial Services Examination 2024",
      organization: "Uttar Pradesh Public Service Commission",
      location: "Uttar Pradesh",
      posts: 350,
      lastDate: "2024-10-30",
      status: "Active",
      salaryRange: "₹49,870 - ₹1,58,800",
    },
    {
      id: "rajasthan-judicial-2024",
      title: "Rajasthan Judicial Services Exam 2024",
      organization: "Rajasthan High Court",
      location: "Rajasthan",
      posts: 120,
      lastDate: "2024-11-10",
      status: "Active",
      salaryRange: "₹55,000 - ₹1,75,000",
    },
    {
      id: "maharashtra-judicial-2024",
      title: "Maharashtra Judicial Services Examination 2024",
      organization: "Maharashtra Public Service Commission",
      location: "Maharashtra",
      posts: 200,
      lastDate: "2024-11-20",
      status: "Active",
      salaryRange: "₹51,550 - ₹1,63,100",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Judicial Jobs
          </h1>
          <p className="text-muted-foreground text-lg">
            Court clerk, judicial officer and other law-related government job notifications
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

export default JudicialJobs;
