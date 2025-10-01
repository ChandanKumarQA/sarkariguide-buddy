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
      organization: "IIT (Organizing Institute)",
      startDate: "30 Aug 2025",
      lastDate: "06 Oct 2025",
      examDate: "7-8 & 14-15 Feb 2026",
      fee: "₹2,000 (indicative)",
      status: "Open",
      category: "Engineering",
      // Use the official GATE 2026 site/GOAPS announced for 2026
      link: "https://gate2026.iitg.ac.in",
    },
    {
      id: 2,
      title: "JEE Main 2025",
      fullName: "Joint Entrance Examination Main",
      organization: "NTA",
      startDate: "Session 1/2 per NTA",
      lastDate: "As per NTA notice",
      examDate: "Jan/Apr 2025 (per session)",
      fee: "₹1,000",
      status: "Closed",
      category: "Engineering",
      // Official site + NIC application portal for 2025
      link: "https://jeemain.nta.nic.in",
    },
    {
      id: 3,
      title: "NEET UG 2025",
      fullName: "National Eligibility Entrance Test",
      organization: "NTA",
      startDate: "07 Feb 2025",
      lastDate: "07 Mar 2025",
      examDate: "04 May 2025",
      fee: "₹1,700",
      status: "Closed",
      category: "Medical",
      // Official site; application ran on NIC portal
      link: "https://neet.nta.nic.in",
    },
    {
      id: 4,
      title: "BCECE 2025",
      fullName: "Bihar Combined Entrance Competitive Examination",
      organization: "BCECE Board",
      startDate: "As per BCECEB",
      lastDate: "As per BCECEB",
      examDate: "As per BCECEB",
      fee: "As notified",
      status: "Opening Soon",
      category: "Engineering",
      // BCECE Board official portal
      link: "https://bceceboard.bihar.gov.in",
    },
    {
      id: 5,
      title: "DCECE",
      fullName: "Diploma Certificate Entrance Competitive Exam (Bihar)",
      organization: "BCECE Board",
      startDate: "As per BCECEB",
      lastDate: "As per BCECEB",
      examDate: "As per BCECEB",
      fee: "As notified",
      status: "Opening Soon",
      category: "Engineering",
      // Bihar DCECE is under BCECEB; Delhi does not have a 'DCECE Board'
      link: "https://bceceboard.bihar.gov.in",
    },
    {
      id: 6,
      title: "CUET 2025",
      fullName: "Common University Entrance Test",
      organization: "NTA",
      startDate: "As per NTA",
      lastDate: "As per NTA",
      examDate: "May 2025",
      fee: "₹800 (UG indicative)",
      status: "Closed",
      category: "University",
      // NTA home for CUET notices
      link: "https://www.nta.ac.in",
    },
    {
      id: 7,
      title: "CAT 2025",
      fullName: "Common Admission Test",
      organization: "IIMs",
      startDate: "Aug 2025 (expected)",
      lastDate: "Sep 2025 (expected)",
      examDate: "Nov 2025",
      fee: "As notified",
      status: "Opening Soon",
      category: "Management",
      // Official CAT portal (hosted by convening IIM yearly)
      link: "https://iimcat.ac.in",
    },
    {
      id: 8,
      title: "CLAT 2025",
      fullName: "Common Law Admission Test",
      organization: "Consortium of NLUs",
      startDate: "As per Consortium",
      lastDate: "15 Oct 2025",
      examDate: "Dec 2025",
      fee: "₹4,000",
      status: "Open",
      category: "Law",
      // Consortium official site
      link: "https://consortiumofnlus.ac.in",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Admission Forms
          </h1>
          <p className="text-muted-foreground text-lg">
            Apply for entrance exams including GATE, JEE, NEET, BCECE, DCECE and more
          </p>
        </div>

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
