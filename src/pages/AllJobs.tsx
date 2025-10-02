import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Job } from "@/lib/database";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-success text-white";
    case "Closing Soon":
      return "bg-warning text-black";
    case "Closed":
      return "bg-destructive text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const AllJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedEducation, setSelectedEducation] = useState("All");

  // Fetch jobs from job.json file
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/job.json');
        const data = await response.json();
        // Add createdAt and updatedAt for compatibility
        const jobsWithTimestamps = data.map((job: any) => ({
          ...job,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }));
        setJobs(jobsWithTimestamps);
      } catch (error) {
        console.error('Error fetching jobs from JSON:', error);
      }
    };

    fetchJobs();
  }, []);

  // Client-side filtering
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === "" || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || job.status === selectedStatus;
    const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation);
    const matchesEducation = selectedEducation === "All" || job.eligibility.includes(selectedEducation);
    return matchesSearch && matchesCategory && matchesStatus && matchesLocation && matchesEducation;
  });

  // Get unique categories from jobs
  const categories = ["All", ...Array.from(new Set(jobs.map(job => job.category)))];
  const statuses = ["All", "Active", "Closing Soon", "Closed"];
  const locations = ["All", "All India", "Delhi", "Mumbai", "Bangalore", "Multiple States", "State-wide", "Multiple Cities", "Pan India", "Various Centers", "Chandigarh", "Delhi NCR"];
  const educations = ["All", "10th Pass", "12th Pass", "Graduate", "Post Graduate", "ITI/Diploma", "B.Ed", "B.Tech", "B.Tech/B.E", "B.Sc Nursing", "B.Pharm", "D.Pharm", "DMLT/BMLT", "Diploma Radiology", "B.Tech/Diploma", "Diploma/B.Tech"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-primary hover:text-primary/80">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">All Jobs</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">All Government Jobs</h1>
              <p className="text-muted-foreground">Browse all available government job opportunities across India</p>
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
          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" /> Filter Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Row 1: Search and Category */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search jobs..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Row 2: Status, Location, Education */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedEducation} onValueChange={setSelectedEducation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Education" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {educations.map(education => (
                        <SelectItem key={education} value={education}>
                          {education}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters Button */}
                <div className="flex justify-end">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setSelectedStatus("All");
                      setSelectedLocation("All");
                      setSelectedEducation("All");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} 
              {(selectedCategory !== "All" || selectedStatus !== "All" || selectedLocation !== "All" || selectedEducation !== "All" || searchTerm) 
                ? " (filtered)" 
                : ""}
            </p>
            {filteredJobs.length === 0 && (
              <Badge variant="outline" className="text-muted-foreground">
                No jobs found. Try adjusting filters.
              </Badge>
            )}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer transition-colors">
                        {job.title}{" "}
                        {job.id === "bssc-office-attendant-2025" && (
                          <Badge variant="destructive">New</Badge>
                        )}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium mb-2">{job.organization}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{job.category}</Badge>
                        <Badge variant="secondary">{job.eligibility}</Badge>
                        <Badge variant="outline">Age: {job.ageLimit}</Badge>
                      </div>
                    </div>
                    <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
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
                    <div className="text-sm text-muted-foreground">
                      Posted: {Math.floor(Math.random() * 10) + 1} days ago
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/job-details/${job.id}`}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                      <Button>Apply Now</Button>
                    </div>
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

export default AllJobs;
