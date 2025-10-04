import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, ExternalLink, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  eligibility?: string;
  ageLimit?: string;
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

const RailwayJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/job.json");
        const data = await response.json();
        // Filter jobs where category includes "Railway" or organization includes "Railway"/"RRB"
        const railwayJobs = data.jobs?.filter((job: Job) => 
          job.category?.toLowerCase().includes("railway") || 
          job.organization?.toLowerCase().includes("railway") ||
          job.organization?.toLowerCase().includes("rrb")
        ) || [];
        setJobs(railwayJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb & Header */}
      <section className="bg-primary-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Railway Jobs</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Railway Jobs & Recruitment
              </h1>
              <p className="text-muted-foreground">
                Latest Indian Railway job notifications and openings
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

      {/* Filters & Search */}
      <section className="py-6 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search railway jobs..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {loading ? "Loading..." : `Showing ${jobs.length} railway job opportunities`}
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p className="text-center text-muted-foreground">No railway jobs available at the moment.</p>
          ) : (
            <div className="grid gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                        Salary: {job.salaryRange}
                      </div>
                    </div>
                    
                    {job.eligibility && (
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Eligibility:</span> {job.eligibility}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Railway</Badge>
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
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RailwayJobs;
