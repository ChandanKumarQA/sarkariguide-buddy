import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";

interface Admission {
  id: string;
  title: string;
  fullName: string;
  organization: string;
  category: string;
  startDate: string;
  lastDate: string;
  examDate: string;
  fee: string;
  status: string;
  link: string;
  year: number;
}

const Admissions = () => {
  const [admissions, setAdmissions] = useState<Admission[]>([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch("/admissions.json");
        const data = await response.json();
        setAdmissions(data.admissions || []);
      } catch (error) {
        console.error("Error fetching admissions:", error);
      }
    };
    fetchAdmissions();
  }, []);

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
                    <span>Apply: {new Date(admission.startDate).toLocaleDateString()} - {new Date(admission.lastDate).toLocaleDateString()}</span>
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
