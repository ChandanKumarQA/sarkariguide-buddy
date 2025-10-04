import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ExternalLink,
  FileText,
  BookOpen,
  CheckCircle
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
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
  officialWebsite?: string;
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

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch("/job.json");
        const data = await response.json();
        const foundJob = data.jobs?.find((j: Job) => j.id === jobId);
        setJob(foundJob || null);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-primary-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Job Details</span>
          </div>
        </div>
      </section>

      {/* Job Header */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Button>
            </Link>
            <Badge className={getStatusColor(job.status)}>
              {job.status}
            </Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-foreground mb-2">
                {job.title}
              </CardTitle>
              <p className="text-lg text-muted-foreground font-medium">
                {job.organization}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {job.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  {job.posts.toLocaleString()} Total Posts
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Apply by: {new Date(job.lastDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Salary: {job.salaryRange}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4">
                {job.eligibility && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Eligibility</h4>
                    <p className="text-muted-foreground">{job.eligibility}</p>
                  </div>
                )}
                {job.ageLimit && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Age Limit</h4>
                    <p className="text-muted-foreground">{job.ageLimit}</p>
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open(job.applicationUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
                {job.officialWebsite && (
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(job.officialWebsite, '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Official Website
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Job Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Category</h4>
                    <Badge variant="outline">{job.category}</Badge>
                  </div>
                  <Separator />
                  {job.eligibility && (
                    <>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Educational Qualification</h4>
                        <p className="text-muted-foreground">{job.eligibility}</p>
                      </div>
                      <Separator />
                    </>
                  )}
                  {job.ageLimit && (
                    <>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Age Limit</h4>
                        <p className="text-muted-foreground">{job.ageLimit}</p>
                      </div>
                      <Separator />
                    </>
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Total Vacancies</h4>
                    <p className="text-muted-foreground font-semibold">{job.posts.toLocaleString()} Posts</p>
                  </div>
                </CardContent>
              </Card>

              {/* Important Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      For complete details about the selection process, exam pattern, and syllabus, please visit the official website or download the official notification.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1"
                      onClick={() => window.open(job.applicationUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Online
                    </Button>
                    {job.officialWebsite && (
                      <Button 
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(job.officialWebsite, '_blank')}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Official Notification
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-foreground">Last Date to Apply</span>
                    <p className="text-lg font-semibold text-primary mt-1">
                      {new Date(job.lastDate).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open(job.applicationUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Online
                  </Button>
                  {job.officialWebsite && (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(job.officialWebsite, '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Official Website
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Jobs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetails;
