import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, IndianRupee } from "lucide-react";

const Admissions = () => {
  const admissions = [
    {
      id: 1,
      title: "GATE 2026",
      fullName: "Graduate Aptitude Test in Engineering",
      organization: "IIT Delhi",
      startDate: "30 Aug 2025",
      lastDate: "30 Sept 2025",
      examDate: "1-2 Feb 2026",
      fee: "₹1,800",
      status: "Open Soon",
      category: "Engineering",
      link: "#",
    },
    {
      id: 2,
      title: "JEE Main 2025",
      fullName: "Joint Entrance Examination Main",
      organization: "NTA",
      startDate: "1 Nov 2024",
      lastDate: "30 Nov 2024",
      examDate: "Jan 2025",
      fee: "₹1,000",
      status: "Opening Soon",
      category: "Engineering",
      link: "#",
    },
    {
      id: 3,
      title: "NEET UG 2025",
      fullName: "National Eligibility Entrance Test",
      organization: "NTA",
      startDate: "15 Dec 2024",
      lastDate: "15 Jan 2025",
      examDate: "May 2025",
      fee: "₹1,700",
      status: "Opening Soon",
      category: "Medical",
      link: "#",
    },
    {
      id: 4,
      title: "BCECE 2025",
      fullName: "Bihar Combined Entrance Competitive Examination",
      organization: "BCECE Board",
      startDate: "1 Jan 2025",
      lastDate: "31 Jan 2025",
      examDate: "March 2025",
      fee: "₹1,000",
      status: "Opening Soon",
      category: "Engineering",
      link: "#",
    },
    {
      id: 5,
      title: "DCECE 2025",
      fullName: "Delhi Combined Entrance Examination",
      organization: "DCECE Board",
      startDate: "15 Dec 2024",
      lastDate: "15 Jan 2025",
      examDate: "Feb 2025",
      fee: "₹1,200",
      status: "Opening Soon",
      category: "Engineering",
      link: "#",
    },
    {
      id: 6,
      title: "CUET 2025",
      fullName: "Common University Entrance Test",
      organization: "NTA",
      startDate: "1 Feb 2025",
      lastDate: "28 Feb 2025",
      examDate: "May 2025",
      fee: "₹800",
      status: "Opening Soon",
      category: "University",
      link: "#",
    },
    {
      id: 7,
      title: "CAT 2025",
      fullName: "Common Admission Test",
      organization: "IIMs",
      startDate: "1 Aug 2025",
      lastDate: "20 Sept 2025",
      examDate: "Nov 2025",
      fee: "₹2,400",
      status: "Opening Soon",
      category: "Management",
      link: "#",
    },
    {
      id: 8,
      title: "CLAT 2025",
      fullName: "Common Law Admission Test",
      organization: "Consortium of NLUs",
      startDate: "15 June 2025",
      lastDate: "15 Oct 2025",
      examDate: "Dec 2025",
      fee: "₹4,000",
      status: "Opening Soon",
      category: "Law",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Admission Forms
          </h1>
          <p className="text-muted-foreground text-lg">
            Apply for entrance exams including GATE, JEE, NEET, BCECE, DCECE and more
          </p>
        </div>

        {/* Admissions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admissions.map((admission) => (
            <Card key={admission.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{admission.category}</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                    {admission.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-1">{admission.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{admission.fullName}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 shrink-0" />
                    <span>Apply: {admission.startDate} - {admission.lastDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 shrink-0" />
                    <span>Exam: {admission.examDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <IndianRupee className="h-4 w-4 mr-2 shrink-0" />
                    <span>Fee: {admission.fee}</span>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <a href={admission.link} target="_blank" rel="noopener noreferrer">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
