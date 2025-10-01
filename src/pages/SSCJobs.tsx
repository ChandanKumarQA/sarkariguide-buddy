import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SSCJobs = () => {
  const jobs = [
    {
      id: "ssc-cgl-2024",
      title: "SSC Combined Graduate Level Examination 2024",
      organization: "Staff Selection Commission",
      location: "All India",
      posts: 15000,
      lastDate: "2024-10-30",
      status: "Active",
      salaryRange: "₹29,200 - ₹92,300",
    },
    {
      id: "ssc-chsl-2024",
      title: "SSC CHSL (10+2) Recruitment 2024",
      organization: "Staff Selection Commission",
      location: "All India",
      posts: 8500,
      lastDate: "2024-11-15",
      status: "Active",
      salaryRange: "₹19,900 - ₹63,200",
    },
    {
      id: "ssc-mts-2024",
      title: "SSC Multi Tasking Staff 2024",
      organization: "Staff Selection Commission",
      location: "All India",
      posts: 12000,
      lastDate: "2024-10-25",
      status: "Active",
      salaryRange: "₹18,000 - ₹56,900",
    },
    {
      id: "ssc-je-2024",
      title: "SSC Junior Engineer Recruitment 2024",
      organization: "Staff Selection Commission",
      location: "All India",
      posts: 6500,
      lastDate: "2024-11-05",
      status: "Active",
      salaryRange: "₹35,400 - ₹1,12,400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            SSC Jobs
          </h1>
          <p className="text-muted-foreground text-lg">
            Staff Selection Commission job notifications and recruitment details
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

export default SSCJobs;
