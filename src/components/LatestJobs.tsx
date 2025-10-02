import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ExternalLink, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  posts: number;
  lastDate: string;
  status: string;
  category: string;
  salaryRange: string;
  applicationUrl: string;
}

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
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/job.json');
        const data = await response.json();
        // Show only the first 4 latest jobs
        setJobs(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Latest Job Notifications
            </h2>
            <p className="text-muted-foreground">
              Fresh government job openings updated daily
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/all-jobs">
              <Button variant="outline">
                View All Jobs
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
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
                    <Link to={`/job-details/${job.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(job.applicationUrl, '_blank')}
                    >
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