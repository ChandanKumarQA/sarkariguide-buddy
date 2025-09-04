import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, ExternalLink, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const railwayJobs = [
  {
    title: "Indian Railway Recruitment Board - Technician Posts",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: 25000,
    lastDate: "2024-10-15",
    status: "Active",
    salaryRange: "₹35,400 - ₹1,12,400",
    applicationUrl: "https://www.rrbcdg.gov.in/",
    eligibility: "ITI/Diploma in relevant trade",
  },
  {
    title: "RRB Assistant Loco Pilot Recruitment 2024",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: 18000,
    lastDate: "2024-09-28",
    status: "Closing Soon",
    salaryRange: "₹19,900 - ₹63,200",
    applicationUrl: "https://www.rrbcdg.gov.in/",
    eligibility: "ITI + NCVT/SCVT Certificate",
  },
  {
    title: "Railway Protection Force Constable",
    organization: "Railway Protection Force",
    location: "All India", 
    posts: 9500,
    lastDate: "2024-10-30",
    status: "Active",
    salaryRange: "₹21,700 - ₹69,100",
    applicationUrl: "https://www.indianrailways.gov.in/",
    eligibility: "12th Pass + Physical Standards",
  },
  {
    title: "Station Master Grade-II Recruitment",
    organization: "Indian Railways",
    location: "Northern Railway",
    posts: 3200,
    lastDate: "2024-10-12",
    status: "Active",
    salaryRange: "₹25,500 - ₹81,100",
    applicationUrl: "https://www.nr.indianrailways.gov.in/",
    eligibility: "Graduate + Railway certification",
  },
  {
    title: "Junior Engineer (JE) - Civil/Mechanical/Electrical",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: 14000,
    lastDate: "2024-11-15",
    status: "Active",
    salaryRange: "₹35,400 - ₹1,12,400",
    applicationUrl: "https://www.rrbcdg.gov.in/",
    eligibility: "Diploma/B.Tech in relevant field",
  },
  {
    title: "Track Maintainer Grade-IV",
    organization: "Indian Railways",
    location: "All India",
    posts: 28000,
    lastDate: "2024-09-22",
    status: "Closing Soon",
    salaryRange: "₹18,000 - ₹56,900",
    applicationUrl: "https://www.indianrailways.gov.in/",
    eligibility: "10th Pass + Physical fitness",
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

const RailwayJobs = () => {
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
              Showing {railwayJobs.length} railway job opportunities
            </p>
          </div>

          <div className="grid gap-6">
            {railwayJobs.map((job, index) => (
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
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Eligibility:</span> {job.eligibility}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Railway</Badge>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RailwayJobs;