import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allJobs = [
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
    applicationUrl: "https://www.rrbapply.gov.in/#/auth/landing",
    eligibility: "12th Pass + ITI",
    ageLimit: "18-33 years"
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
    eligibility: "Bachelor's Degree",
    ageLimit: "18-32 years"
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
    eligibility: "Bachelor's Degree",
    ageLimit: "20-28 years"
  },
  {
    id: "aiims-nurse-2024",
    title: "AIIMS Staff Nurse Recruitment",
    organization: "All India Institute of Medical Sciences",
    location: "Delhi, Mumbai, Kolkata",
    posts: 1200,
    lastDate: "2024-09-25",
    status: "Active",
    category: "Healthcare",
    salaryRange: "₹25,500 - ₹81,100",
    applicationUrl: "https://www.aiims.edu/",
    eligibility: "B.Sc Nursing",
    ageLimit: "21-30 years"
  },
  {
    id: "upsc-cse-2024",
    title: "UPSC Civil Services Examination 2024",
    organization: "Union Public Service Commission",
    location: "All India",
    posts: 1000,
    lastDate: "2024-08-15",
    status: "Closed",
    category: "UPSC",
    salaryRange: "₹56,100 - ₹2,50,000",
    applicationUrl: "https://www.upsc.gov.in/",
    eligibility: "Bachelor's Degree",
    ageLimit: "21-32 years"
  },
  {
    id: "fci-junior-engineer-2024",
    title: "FCI Junior Engineer Recruitment",
    organization: "Food Corporation of India",
    location: "Pan India",
    posts: 4500,
    lastDate: "2024-11-30",
    status: "Active",
    category: "Engineering",
    salaryRange: "₹44,900 - ₹1,42,400",
    applicationUrl: "https://fci.gov.in/",
    eligibility: "B.Tech/B.E.",
    ageLimit: "18-30 years"
  },
  {
    id: "lic-ado-2024",
    title: "LIC Assistant Development Officer",
    organization: "Life Insurance Corporation of India",
    location: "All India",
    posts: 3500,
    lastDate: "2024-10-10",
    status: "Active",
    category: "Insurance",
    salaryRange: "₹21,865 - ₹69,205",
    applicationUrl: "https://licindia.in/",
    eligibility: "Bachelor's Degree",
    ageLimit: "21-30 years"
  },
  {
    id: "ntpc-engineer-2024",
    title: "NTPC Engineer Trainee Recruitment",
    organization: "National Thermal Power Corporation",
    location: "Multiple Locations",
    posts: 2800,
    lastDate: "2024-11-15",
    status: "Active",
    category: "PSU",
    salaryRange: "₹50,000 - ₹1,60,000",
    applicationUrl: "https://www.ntpc.co.in/",
    eligibility: "B.Tech/B.E.",
    ageLimit: "24-27 years"
  },
  {
    id: "drdo-scientist-2024",
    title: "DRDO Scientist B Recruitment",
    organization: "Defence Research and Development Organisation",
    location: "Various Centers",
    posts: 1800,
    lastDate: "2024-12-05",
    status: "Active",
    category: "Defence",
    salaryRange: "₹56,100 - ₹1,77,500",
    applicationUrl: "https://www.drdo.gov.in/",
    eligibility: "M.Tech/M.E./M.Sc",
    ageLimit: "28-35 years"
  },
  {
    id: "coal-india-management-2024",
    title: "Coal India Management Trainee",
    organization: "Coal India Limited",
    location: "Eastern & South Eastern Coalfields",
    posts: 2200,
    lastDate: "2024-10-25",
    status: "Active",
    category: "PSU",
    salaryRange: "₹50,000 - ₹1,60,000",
    applicationUrl: "https://www.coalindia.in/",
    eligibility: "Bachelor's Degree",
    ageLimit: "18-30 years"
  }
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["All", ...new Set(allJobs.map(job => job.category))];
  const statuses = ["All", ...new Set(allJobs.map(job => job.status))];

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || job.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">All Jobs</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                All Government Jobs
              </h1>
              <p className="text-muted-foreground">
                Browse all available government job opportunities across India
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

      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
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
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map(status => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedStatus("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredJobs.length} of {allJobs.length} job opportunities
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 hover:text-primary cursor-pointer transition-colors">
                        {job.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium mb-2">
                        {job.organization}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{job.category}</Badge>
                        <Badge variant="secondary">{job.eligibility}</Badge>
                        <Badge variant="outline">Age: {job.ageLimit}</Badge>
                      </div>
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
                    <div className="text-sm text-muted-foreground">
                      Posted: {Math.floor(Math.random() * 10) + 1} days ago
                    </div>
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
                        disabled={job.status === "Closed"}
                      >
                        {job.status === "Closed" ? "Closed" : "Apply Now"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No jobs found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllJobs;
