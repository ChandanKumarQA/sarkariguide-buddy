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

// Updated Job interface to match JSON structure
interface Job {
  id: string;
  title: string;
  organization: string;
  category: string;
  formType: string;
  year: number;
  lastDate: string;
  posts: number;
  location: string;
  eligibility: string;
  ageLimit: string;
  salaryRange: string;
  status: string;
  applicationUrl: string;
  officialWebsite: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Closing Soon":
      return "bg-yellow-500 text-black";
    case "Closed":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

const AllJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedEducation, setSelectedEducation] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch jobs from job.json file
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/job.json');
        const data = await response.json();
        
        // JSON structure has jobs array
        const jobsData = data.jobs || data;
        
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs from JSON:', error);
      } finally {
        setLoading(false);
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

  // Get unique categories, locations, and educations from jobs
  const categories = ["All", ...Array.from(new Set(jobs.map(job => job.category)))];
  const statuses = ["All", "Active", "Closing Soon", "Closed"];
  const locations = ["All", ...Array.from(new Set(jobs.map(job => job.location)))];
  const educations = ["All", ...Array.from(new Set(jobs.map(job => job.eligibility)))];

  // Calculate days ago from lastDate
  const getDaysAgo = (lastDate: string) => {
    const today = new Date();
    const last = new Date(lastDate);
    const diffTime = last.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return "Closed";
    } else if (diffDays === 0) {
      return "Last day!";
    } else if (diffDays <= 5) {
      return `${diffDays} days left`;
    } else {
      return `${diffDays} days left`;
    }
  };

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
            {filteredJobs.length === 0 && !loading && (
              <Badge variant="outline" className="text-muted-foreground">
                No jobs found. Try adjusting filters.
              </Badge>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Loading jobs...</p>
            </div>
          )}

          {/* Job Listings */}
          {!loading && (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer transition-colors">
                          {job.title}{" "}
                          {job.note && (
                            <Badge variant="destructive" className="ml-2">{job.note}</Badge>
                          )}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium mb-2">{job.organization}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{job.category}</Badge>
                          <Badge variant="secondary">{job.eligibility}</Badge>
                          <Badge variant="outline">Age: {job.ageLimit}</Badge>
                          <Badge variant="outline">{job.formType}</Badge>
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
                        Last Date: {new Date(job.lastDate).toLocaleDateString('en-IN')}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        Salary: {job.salaryRange}
                      </div>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="text-sm font-medium text-primary">
                        {getDaysAgo(job.lastDate)}
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/job-details/${job.id}`}>
                          <Button variant="outline">View Details</Button>
                        </Link>
                        <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                          <Button>Apply Now</Button>
                        </a>
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

export default AllJobs;
