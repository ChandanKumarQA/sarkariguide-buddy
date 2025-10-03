import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface Result {
  id: string;
  title: string;
  organization: string;
  date: string;
  status: string;
  category: string;
  link: string;
}

const Results = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("/result.json");
        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };
    fetchResults();
  }, []);

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
