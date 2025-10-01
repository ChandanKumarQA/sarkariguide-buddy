import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const UPSCJobs = () => {
  const jobs = [
    {
      id: "upsc-cse-2024",
      title: "UPSC Civil Services Examination 2024",
      organization: "Union Public Service Commission",
      location: "All India",
      posts: 1000,
      lastDate: "2024-11-30",
      status: "Active",
      salaryRange: "₹56,100 - ₹2,50,000",
    },
    {
      id: "upsc-cds-2024",
      title: "UPSC Combined Defence Services Exam 2024",
      organization: "Union Public Service Commission",
      location: "All India",
      posts: 450,
      lastDate: "2024-10-28",
      status: "Active",
      salaryRange: "₹56,100 - ₹1,77,500",
    },
    {
      id: "upsc-nda-2024",
      title: "UPSC NDA & NA Examination 2024",
      organization: "Union Public Service Commission",
      location: "All India",
      posts: 400,
      lastDate: "2024-11-10",
      status: "Active",
      salaryRange: "₹56,100 - ₹1,77,500",
    },
    {
      id: "upsc-ese-2024",
      title: "UPSC Engineering Services Examination 2024",
      organization: "Union Public Service Commission",
      location: "All India",
      posts: 325,
      lastDate: "2024-11-20",
      status: "Active",
      salaryRange: "₹56,100 - ₹1,77,500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            UPSC Jobs
          </h1>
          <p className="text-muted-foreground text-lg">
            Union Public Service Commission civil services and other recruitment notifications
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

export default UPSCJobs;
