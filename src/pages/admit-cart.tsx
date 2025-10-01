import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const admitCards = [
  {
    id: 1,
    title: "SSC CGL 2025 Admit Card",
    organization: "Staff Selection Commission",
    date: "Release: Oct 2025",
    status: "Available Soon",
    category: "SSC",
    link: "https://ssc.gov.in/", // official portal
  },
  {
    id: 2,
    title: "JEE Main 2025 Admit Card",
    organization: "National Testing Agency",
    date: "Session-wise",
    status: "Closed",
    category: "Engineering",
    link: "https://jeemain.nta.nic.in",
  },
  {
    id: 3,
    title: "NEET UG 2025 Admit Card",
    organization: "National Testing Agency",
    date: "Apr 2025",
    status: "Closed",
    category: "Medical",
    link: "https://neet.nta.nic.in",
  },
];

export default function AdmitCardsPage() {
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
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                    {item.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.organization}</p>
                  <Button className="w-full mt-4" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
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
