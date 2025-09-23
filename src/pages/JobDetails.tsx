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
  Target,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jobsData = {
  "railway-technician-2024": {
    title: "Indian Railway Recruitment Board - Technician Posts",
    organization: "Railway Recruitment Board",
    location: "All India",
    posts: 25000,
    lastDate: "2024-10-15",
    status: "Active",
    category: "Railway",
    salaryRange: "₹35,400 - ₹1,12,400",
    applicationUrl: "https://www.rrbapply.gov.in/#/auth/landing",
    description: "Railway Recruitment Board is conducting recruitment for Technician posts across various railway zones. This is an excellent opportunity for candidates with technical qualifications to join Indian Railways.",
    eligibility: {
      education: "12th Pass + ITI in relevant trade",
      age: "18-33 years (age relaxation as per government norms)",
      nationality: "Indian citizen"
    },
    examPattern: {
      tier1: "Computer Based Test (CBT)",
      tier2: "Physical Efficiency Test (PET)",
      tier3: "Document Verification",
      tier4: "Medical Examination"
    },
    syllabus: [
      "General Awareness",
      "Arithmetic",
      "General Intelligence & Reasoning",
      "General Science & Technical Abilities"
    ],
    importantDates: [
      { event: "Application Start Date", date: "2024-08-15" },
      { event: "Application End Date", date: "2024-10-15" },
      { event: "Fee Payment Last Date", date: "2024-10-17" },
      { event: "CBT Exam Date", date: "2024-12-01 to 2024-12-30" }
    ],
    applicationFee: {
      general: "₹500",
      reserved: "₹250 (for SC/ST/PwD/Ex-servicemen)"
    },
    postDetails: [
      { name: "Technician Signal", vacancies: 8000, payScale: "₹35,400 - ₹1,12,400" },
      { name: "Technician Telecommunication", vacancies: 5000, payScale: "₹35,400 - ₹1,12,400" },
      { name: "Technician Electrical", vacancies: 7000, payScale: "₹35,400 - ₹1,12,400" },
      { name: "Technician Mechanical", vacancies: 5000, payScale: "₹35,400 - ₹1,12,400" }
    ]
  },
  "ssc-cgl-2024": {
    title: "SSC Combined Graduate Level Examination 2024",
    organization: "Staff Selection Commission",
    location: "All India",
    posts: 15000,
    lastDate: "2024-09-30",
    status: "Closing Soon",
    category: "SSC",
    salaryRange: "₹29,200 - ₹92,300",
    applicationUrl: "https://ssc.nic.in/",
    description: "The Staff Selection Commission (SSC) conducts the Combined Graduate Level (CGL) examination to recruit candidates for various Group B and Group C posts in different Government Ministries, Departments, and Organizations.",
    eligibility: {
      education: "Bachelor's degree from a recognized university or equivalent",
      age: "18-32 years (age relaxation as per government norms)",
      nationality: "Indian citizen"
    },
    examPattern: {
      tier1: "Computer Based Examination (Objective Type)",
      tier2: "Computer Based Examination (Objective Type)",
      tier3: "Descriptive Paper (Pen and Paper Mode)",
      tier4: "Computer Proficiency Test/Skill Test"
    },
    syllabus: [
      "General Intelligence and Reasoning",
      "General Awareness",
      "Quantitative Aptitude",
      "English Comprehension"
    ],
    importantDates: [
      { event: "Application Start Date", date: "2024-08-01" },
      { event: "Application End Date", date: "2024-09-30" },
      { event: "Fee Payment Last Date", date: "2024-10-02" },
      { event: "Tier-I Exam Date", date: "2024-11-15 to 2024-12-15" }
    ],
    applicationFee: {
      general: "₹100",
      reserved: "Nil (for SC/ST/PwD/Ex-servicemen)"
    },
    postDetails: [
      { name: "Assistant Audit Officer", vacancies: 1500, payScale: "₹47,600 - ₹1,51,100" },
      { name: "Inspector (Central Excise)", vacancies: 2000, payScale: "₹35,400 - ₹1,12,400" },
      { name: "Inspector (Preventive Officer)", vacancies: 1800, payScale: "₹35,400 - ₹1,12,400" },
      { name: "Sub Inspector (CBI)", vacancies: 500, payScale: "₹35,400 - ₹1,12,400" },
      { name: "Assistant Section Officer", vacancies: 3000, payScale: "₹29,200 - ₹92,300" },
      { name: "Assistant", vacancies: 6200, payScale: "₹25,500 - ₹81,100" }
    ]
  },
  "ibps-clerk-2024": {
    title: "IBPS Clerk Recruitment 2024",
    organization: "Institute of Banking Personnel Selection",
    location: "All India",
    posts: 8500,
    lastDate: "2024-10-20",
    status: "Active",
    category: "Banking",
    salaryRange: "₹19,900 - ₹63,200",
    applicationUrl: "https://www.ibps.in/",
    description: "IBPS conducts Common Recruitment Process (CRP) for recruitment of Clerks in Public Sector Banks. This is one of the most popular banking examinations in India.",
    eligibility: {
      education: "Bachelor's degree in any discipline from a recognized university",
      age: "20-28 years (age relaxation as per government norms)",
      nationality: "Indian citizen or subject of Nepal/Bhutan"
    },
    examPattern: {
      tier1: "Preliminary Examination (Online)",
      tier2: "Main Examination (Online)",
      tier3: "Language Proficiency Test",
      tier4: "Interview (if applicable)"
    },
    syllabus: [
      "English Language",
      "Numerical Ability",
      "Reasoning Ability",
      "General Awareness",
      "Computer Knowledge"
    ],
    importantDates: [
      { event: "Application Start Date", date: "2024-09-01" },
      { event: "Application End Date", date: "2024-10-20" },
      { event: "Preliminary Exam", date: "2024-12-07 to 2024-12-08" },
      { event: "Main Exam", date: "2025-01-19" }
    ],
    applicationFee: {
      general: "₹850",
      reserved: "₹175 (for SC/ST/PwD)"
    },
    postDetails: [
      { name: "Clerk - State Bank of India", vacancies: 2500, payScale: "₹19,900 - ₹63,200" },
      { name: "Clerk - Punjab National Bank", vacancies: 1800, payScale: "₹19,900 - ₹63,200" },
      { name: "Clerk - Bank of Baroda", vacancies: 1500, payScale: "₹19,900 - ₹63,200" },
      { name: "Clerk - Other Public Banks", vacancies: 2700, payScale: "₹19,900 - ₹63,200" }
    ]
  },
  "aiims-nurse-2024": {
    title: "AIIMS Staff Nurse Recruitment",
    organization: "All India Institute of Medical Sciences",
    location: "Delhi, Mumbai, Kolkata",
    posts: 1200,
    lastDate: "2024-09-25",
    status: "Active",
    category: "Healthcare",
    salaryRange: "₹25,500 - ₹81,100",
    applicationUrl: "https://www.aiims.edu/",
    description: "AIIMS is recruiting Staff Nurses for various departments. This is an excellent opportunity for nursing professionals to work in premier medical institutions of India.",
    eligibility: {
      education: "B.Sc (Hons.) Nursing/Post Basic B.Sc. Nursing from recognized institution",
      age: "21-30 years (age relaxation as per government norms)",
      nationality: "Indian citizen"
    },
    examPattern: {
      tier1: "Computer Based Test (CBT)",
      tier2: "Skill Assessment Test",
      tier3: "Document Verification",
      tier4: "Medical Examination"
    },
    syllabus: [
      "Nursing Foundation",
      "Medical-Surgical Nursing",
      "Child Health Nursing",
      "Mental Health Nursing",
      "Community Health Nursing",
      "General Knowledge"
    ],
    importantDates: [
      { event: "Application Start Date", date: "2024-08-20" },
      { event: "Application End Date", date: "2024-09-25" },
      { event: "CBT Exam Date", date: "2024-10-30" },
      { event: "Result Declaration", date: "2024-11-15" }
    ],
    applicationFee: {
      general: "₹1000",
      reserved: "₹800 (for SC/ST/OBC/PwD)"
    },
    postDetails: [
      { name: "Staff Nurse - AIIMS Delhi", vacancies: 400, payScale: "₹25,500 - ₹81,100" },
      { name: "Staff Nurse - AIIMS Mumbai", vacancies: 350, payScale: "₹25,500 - ₹81,100" },
      { name: "Staff Nurse - AIIMS Kolkata", vacancies: 300, payScale: "₹25,500 - ₹81,100" },
      { name: "Staff Nurse - Other AIIMS", vacancies: 150, payScale: "₹25,500 - ₹81,100" }
    ]
  }
};

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
  const job = jobsData[jobId as keyof typeof jobsData];

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
              <p className="text-muted-foreground mb-6">
                {job.description}
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open(job.applicationUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Apply Now
              </Button>
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
              {/* Eligibility Criteria */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Educational Qualification</h4>
                    <p className="text-muted-foreground">{job.eligibility.education}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Age Limit</h4>
                    <p className="text-muted-foreground">{job.eligibility.age}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Nationality</h4>
                    <p className="text-muted-foreground">{job.eligibility.nationality}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Exam Pattern */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Exam Pattern
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tier I</h4>
                    <p className="text-muted-foreground">{job.examPattern.tier1}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tier II</h4>
                    <p className="text-muted-foreground">{job.examPattern.tier2}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tier III</h4>
                    <p className="text-muted-foreground">{job.examPattern.tier3}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tier IV</h4>
                    <p className="text-muted-foreground">{job.examPattern.tier4}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Syllabus */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Syllabus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {job.syllabus.map((subject, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                        <FileText className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Post Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Post-wise Vacancies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {job.postDetails.map((post, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{post.name}</h4>
                          <Badge variant="outline">{post.vacancies} vacancies</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Pay Scale: {post.payScale}
                        </p>
                      </div>
                    ))}
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
                  {job.importantDates.map((date, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-medium text-foreground">{date.event}</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(date.date).toLocaleDateString()}
                        </span>
                      </div>
                      {index < job.importantDates.length - 1 && <Separator className="mt-2" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Application Fee */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                    Application Fee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">General/OBC</span>
                      <span className="text-sm font-medium text-foreground">{job.applicationFee.general}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">SC/ST/PwD/ESM</span>
                      <span className="text-sm font-medium text-foreground">{job.applicationFee.reserved}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open(job.applicationUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Online
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Notification
                  </Button>
                  <Link to="/study-materials">
                    <Button variant="outline" className="w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Study Materials
                    </Button>
                  </Link>
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
