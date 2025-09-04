import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ExternalLink, Users } from "lucide-react";

const jobs = [
  {
    title: "Indian Railway Recruitment Board - Technician Posts",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: 25000,
    lastDate: "2024-10-15",
    status: "Active",
    category: "Railway",
    salaryRange: "₹35,400 - ₹1,12,400",
  },
  {
    title: "SSC Combined Graduate Level Examination 2024",
    organization: "Staff Selection Commission",
    location: "All India",
    posts: 15000,
    lastDate: "2024-09-30",
    status: "Closing Soon",
    category: "SSC",
    salaryRange: "₹29,200 - ₹92,300",
  },
  {
    title: "IBPS Clerk Recruitment 2024",
    organization: "Institute of Banking Personnel Selection",
    location: "All India",
    posts: 8500,
    lastDate: "2024-10-20",
    status: "Active",
    category: "Banking",
    salaryRange: "₹19,900 - ₹63,200",
  },
  {
    title: "AIIMS Staff Nurse Recruitment",
    organization: "All India Institute of Medical Sciences",
    location: "Delhi, Mumbai, Kolkata",
    posts: 1200,
    lastDate: "2024-09-25",
    status: "Active",
    category: "Healthcare",
    salaryRange: "₹25,500 - ₹81,100",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-success text-white";
    case "Closing Soon":
      return "bg-warning text-black";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const LatestJobs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Latest Job Notifications
            </h2>
            <p className="text-muted-foreground">
              Fresh government job openings updated daily
            </p>
          </div>
          <Button variant="outline">
            View All Jobs
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer transition-colors">
                      {job.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">
                      {job.organization}
                    </p>
                  </div>
                  <Badge className={getStatusColor(job.status)}>
                    {job.status}
                  </Badge>
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
                    Salary: {job.salaryRange}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{job.category}</Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;