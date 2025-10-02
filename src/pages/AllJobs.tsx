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
import { jobsApi, Job } from "@/lib/database";

// Fallback data with diverse job categories
const fallbackJobs: Job[] = [
  {
    id: "aiims-staff-nurse-2024",
    title: "AIIMS Staff Nurse Recruitment 2024",
    organization: "All India Institute of Medical Sciences",
    location: "Delhi, Mumbai, Bangalore",
    posts: 1500,
    lastDate: "2024-10-25",
    status: "Active",
    category: "Medical",
    salaryRange: "₹44,900 - ₹1,42,400",
    applicationUrl: "https://www.aiims.edu/",
    eligibility: "B.Sc Nursing",
    ageLimit: "21-35 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "railway-technician-2024",
    title: "Indian Railway Recruitment Board - Technician Posts",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: 25000,
    lastDate: "2024-10-15",
    status: "Active",
    category: "Railway",
    salaryRange: "₹35,400 - ₹1,12,400",
    applicationUrl: "https://www.rrbcdg.gov.in/",
    eligibility: "ITI/Diploma",
    ageLimit: "18-33 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "ssc-cgl-2024",
    title: "SSC Combined Graduate Level Examination 2024",
    organization: "Staff Selection Commission",
    location: "All India",
    posts: 15000,
    lastDate: "2024-09-30",
    status: "Closing Soon",
    category: "SSC",
    salaryRange: "₹29,200 - ₹92,300",
    applicationUrl: "https://ssc.nic.in/",
    eligibility: "Graduate",
    ageLimit: "18-30 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "ibps-clerk-2024",
    title: "IBPS Clerk Recruitment 2024",
    organization: "Institute of Banking Personnel Selection",
    location: "All India",
    posts: 8500,
    lastDate: "2024-10-20",
    status: "Active",
    category: "Banking",
    salaryRange: "₹19,900 - ₹63,200",
    applicationUrl: "https://www.ibps.in/",
    eligibility: "Graduate",
    ageLimit: "20-28 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "upsc-ias-2024",
    title: "UPSC Civil Services Examination 2024",
    organization: "Union Public Service Commission",
    location: "All India",
    posts: 1000,
    lastDate: "2024-10-30",
    status: "Active",
    category: "UPSC",
    salaryRange: "₹56,100 - ₹2,50,000",
    applicationUrl: "https://www.upsc.gov.in/",
    eligibility: "Graduate",
    ageLimit: "21-32 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "high-court-clerk-2024",
    title: "High Court Clerk Recruitment 2024",
    organization: "Delhi High Court",
    location: "Delhi",
    posts: 450,
    lastDate: "2024-10-18",
    status: "Active",
    category: "Judicial",
    salaryRange: "₹25,500 - ₹81,100",
    applicationUrl: "https://www.delhihighcourt.nic.in/",
    eligibility: "Graduate",
    ageLimit: "18-27 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tgt-teacher-2024",
    title: "TGT (Trained Graduate Teacher) Recruitment 2024",
    organization: "Kendriya Vidyalaya Sangathan",
    location: "All India",
    posts: 3500,
    lastDate: "2024-11-05",
    status: "Active",
    category: "Teaching",
    salaryRange: "₹44,900 - ₹1,42,400",
    applicationUrl: "https://kvsangathan.nic.in/",
    eligibility: "B.Ed + Graduate",
    ageLimit: "21-35 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "junior-engineer-2024",
    title: "Junior Engineer (Civil) Recruitment 2024",
    organization: "PWD Department",
    location: "Multiple States",
    posts: 2800,
    lastDate: "2024-10-22",
    status: "Active",
    category: "Engineering",
    salaryRange: "₹35,400 - ₹1,12,400",
    applicationUrl: "https://www.pwd.gov.in/",
    eligibility: "Diploma/B.Tech Civil",
    ageLimit: "18-32 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "pharmacist-govt-2024",
    title: "Government Hospital Pharmacist Recruitment",
    organization: "Department of Health & Family Welfare",
    location: "Various Hospitals",
    posts: 890,
    lastDate: "2024-10-28",
    status: "Active",
    category: "Medical",
    salaryRange: "₹25,500 - ₹81,100",
    applicationUrl: "https://www.health.gov.in/",
    eligibility: "D.Pharm/B.Pharm",
    ageLimit: "18-30 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "police-constable-2024",
    title: "State Police Constable Recruitment 2024",
    organization: "State Police Department",
    location: "State-wide",
    posts: 5600,
    lastDate: "2024-11-10",
    status: "Active",
    category: "Police",
    salaryRange: "₹21,700 - ₹69,100",
    applicationUrl: "https://www.police.gov.in/",
    eligibility: "12th Pass",
    ageLimit: "18-25 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "lab-technician-2024",
    title: "Medical Laboratory Technician Posts",
    organization: "Government Medical College",
    location: "Multiple Cities",
    posts: 670,
    lastDate: "2024-10-20",
    status: "Active",
    category: "Medical",
    salaryRange: "₹25,500 - ₹81,100",
    applicationUrl: "https://www.gmc.edu/",
    eligibility: "DMLT/BMLT",
    ageLimit: "18-32 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "forest-guard-2024",
    title: "Forest Guard Recruitment 2024",
    organization: "Forest Department",
    location: "All India",
    posts: 1200,
    lastDate: "2024-10-15",
    status: "Closing Soon",
    category: "Defence",
    salaryRange: "₹21,700 - ₹69,100",
    applicationUrl: "https://www.forest.gov.in/",
    eligibility: "12th Pass",
    ageLimit: "18-28 years",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

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

  // Fetch jobs from database API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsApi.getAll({
          category: selectedCategory !== "All" ? selectedCategory : undefined,
          status: selectedStatus !== "All" ? selectedStatus : undefined,
          search: searchTerm || undefined,
        });
        setJobs(response.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // Use fallback data if API fails
        setJobs(fallbackJobs);
      }
    };

    fetchJobs();
  }, [selectedCategory, selectedStatus, searchTerm]);

  const categories = ["All", "Railway", "Banking", "SSC", "UPSC", "Medical", "Teaching", "Engineering", "Judicial", "Police", "Defence", "Healthcare"];
  const statuses = ["All", "Active", "Closing Soon", "Closed"];
  const locations = ["All", "All India", "Delhi", "Mumbai", "Bangalore", "Multiple States", "State-wide", "Multiple Cities"];
  const educations = ["All", "12th Pass", "Graduate", "Post Graduate", "ITI/Diploma", "B.Ed", "B.Tech", "B.Sc Nursing", "B.Pharm"];

  // Client-side filtering for location and education
  const filteredJobs = jobs.filter(job => {
    const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation);
    const matchesEducation = selectedEducation === "All" || job.eligibility.includes(selectedEducation);
    return matchesLocation && matchesEducation;
  });

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
