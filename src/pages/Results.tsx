import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, TrendingUp } from "lucide-react";

const Results = () => {
  const results = [
    {
      id: 1,
      title: "SSC CGL 2024 Result",
      organization: "Staff Selection Commission",
      date: "28 Sept 2024",
      status: "Declared",
      category: "SSC",
      link: "https://ssc.gov.in/",
    },
    {
      id: 2,
      title: "SSC CHSL 2024 Result",
      organization: "Staff Selection Commission",
      date: "25 Sept 2024",
      status: "Declared",
      category: "SSC",
      link: "https://ssc.gov.in/",
    },
    {
      id: 3,
      title: "UPSC CSE Mains 2024 Result",
      organization: "Union Public Service Commission",
      date: "22 Sept 2024",
      status: "Declared",
      category: "UPSC",
      link: "https://www.upsc.gov.in/examinations/",
    },
    {
      id: 4,
      title: "Railway RRB NTPC Result",
      organization: "Railway Recruitment Board",
      date: "20 Sept 2024",
      status: "Declared",
      category: "Railway",
      link: "https://www.rrbcdg.gov.in/",
    },
    {
      id: 5,
      title: "IBPS PO Prelims Result 2024",
      organization: "Institute of Banking Personnel Selection",
      date: "18 Sept 2024",
      status: "Declared",
      category: "Banking",
      link: "https://www.ibps.in/",
    },
    {
      id: 6,
      title: "SSC MTS 2024 Result",
      organization: "Staff Selection Commission",
      date: "15 Sept 2024",
      status: "Declared",
      category: "SSC",
      link: "https://ssc.gov.in/",
    },
    {
      id: 7,
      title: "UPPSC PCS Result 2024",
      organization: "Uttar Pradesh Public Service Commission",
      date: "12 Sept 2024",
      status: "Declared",
      category: "State PSC",
      link: "https://uppsc.up.nic.in/",
    },
    {
      id: 8,
      title: "SSC JE 2024 Result",
      organization: "Staff Selection Commission",
      date: "10 Sept 2024",
      status: "Declared",
      category: "SSC",
      link: "https://ssc.gov.in/",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Latest Results
          </h1>
          <p className="text-muted-foreground text-lg">
            Check all government exam results including SSC, UPSC, Railway, Banking and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <Card key={result.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{result.category}</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    {result.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{result.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>{result.organization}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span>Declared on: {result.date}</span>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <a href={result.link} target="_blank" rel="noopener noreferrer">
                      Check Result
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

export default Results;
