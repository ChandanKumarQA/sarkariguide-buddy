import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface AdmitCard {
  id: string;
  title: string;
  organization: string;
  category: string;
  type: string;
  year: number;
  status: string;
  examDate: string;
  location: string;
  posts: number;
  downloadUrl: string;
  officialWebsite: string;
}

export default function AdmitCardsPage() {
  const [admitCards, setAdmitCards] = useState<AdmitCard[]>([]);

  useEffect(() => {
    const fetchAdmitCards = async () => {
      try {
        const response = await fetch("/admitcart.json");
        const data = await response.json();
        setAdmitCards(data.admitCards || []);
      } catch (error) {
        console.error("Error fetching admit cards:", error);
      }
    };
    fetchAdmitCards();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Admit Cards</h1>
          <p className="text-muted-foreground text-lg">
            Download official admit cards for SSC, NTA, UPSC, Railways, Banking, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admitCards.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Badge className="bg-success text-white">
                    {item.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-medium">{item.organization}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Exam: {new Date(item.examDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  {item.posts > 0 && (
                    <p className="text-sm text-muted-foreground">Posts: {item.posts.toLocaleString()}</p>
                  )}
                  <Button className="w-full mt-4" asChild>
                    <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                      Download
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
}
