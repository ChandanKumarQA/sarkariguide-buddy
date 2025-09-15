import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft, FileText, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const studyMaterials = [
  {
    title: "Lucent's General Knowledge",
    description: "Complete GK guide covering all important topics for competitive exams",
    category: "General Knowledge", 
    size: "45 MB",
    pages: "850 pages",
    rating: 4.8,
    downloads: "2.5M+",
    difficulty: "Beginner to Advanced",
  },
  {
    title: "General Studies Manual",
    description: "Comprehensive GS material covering History, Geography, Polity, Economics",
    category: "General Studies",
    size: "38 MB", 
    pages: "720 pages",
    rating: 4.7,
    downloads: "1.8M+",
    difficulty: "Intermediate",
  },
  {
    title: "Current Affairs 2024",
    description: "Monthly current affairs compilation with important events and facts",
    category: "Current Affairs",
    size: "25 MB",
    pages: "450 pages", 
    rating: 4.9,
    downloads: "3.2M+",
    difficulty: "All Levels",
  },
  {
    title: "Quantitative Aptitude Guide",
    description: "Complete mathematics and reasoning guide with solved examples",
    category: "Mathematics",
    size: "32 MB",
    pages: "620 pages",
    rating: 4.6,
    downloads: "2.1M+", 
    difficulty: "Beginner to Advanced",
  },
  {
    title: "Logical Reasoning Handbook", 
    description: "Comprehensive reasoning guide with practice questions and solutions",
    category: "Reasoning",
    size: "28 MB",
    pages: "480 pages",
    rating: 4.7,
    downloads: "1.9M+",
    difficulty: "Intermediate",
  },
  {
    title: "English Grammar & Vocabulary",
    description: "Complete English preparation guide for government exams",
    category: "English",
    size: "22 MB",
    pages: "380 pages",
    rating: 4.5,
    downloads: "1.6M+",
    difficulty: "All Levels",
  },
  {
    title: "Indian Polity by Laxmikanth",
    description: "Detailed coverage of Indian Constitution and political system",
    category: "Polity",
    size: "42 MB", 
    pages: "780 pages",
    rating: 4.9,
    downloads: "2.8M+",
    difficulty: "Advanced",
  },
  {
    title: "Economic Survey 2024",
    description: "Latest economic survey with important facts and figures",
    category: "Economics",
    size: "18 MB",
    pages: "320 pages", 
    rating: 4.4,
    downloads: "1.3M+",
    difficulty: "Intermediate",
  },
  {
    title: "Science & Technology Manual",
    description: "Latest developments in science and technology for competitive exams",
    category: "Science",
    size: "35 MB",
    pages: "560 pages",
    rating: 4.6,
    downloads: "1.7M+",
    difficulty: "Intermediate",
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    "General Knowledge": "bg-blue-100 text-blue-800",
    "General Studies": "bg-green-100 text-green-800", 
    "Current Affairs": "bg-red-100 text-red-800",
    "Mathematics": "bg-purple-100 text-purple-800",
    "Reasoning": "bg-orange-100 text-orange-800",
    "English": "bg-pink-100 text-pink-800",
    "Polity": "bg-indigo-100 text-indigo-800",
    "Economics": "bg-yellow-100 text-yellow-800",
    "Science": "bg-teal-100 text-teal-800",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const StudyMaterials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="text-primary hover:text-primary/80">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Study Materials</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Free Study Materials
              </h1>
              <p className="text-muted-foreground">
                Download comprehensive study guides and preparation materials for government exams
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

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">All Categories</Badge>
              <Badge variant="outline">General Knowledge</Badge>
              <Badge variant="outline">Current Affairs</Badge>
              <Badge variant="outline">Mathematics</Badge>
              <Badge variant="outline">Reasoning</Badge>
              <Badge variant="outline">English</Badge>
            </div>
            <p className="text-muted-foreground">
              Showing {studyMaterials.length} study materials available for download
            </p>
          </div>

          <div className="grid gap-6">
            {studyMaterials.map((material, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl hover:text-primary cursor-pointer transition-colors">
                          {material.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {material.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getCategoryColor(material.category)}>
                          {material.category}
                        </Badge>
                        <Badge variant="outline">{material.difficulty}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      {material.pages}
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-2 text-primary" />
                      {material.size}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      {material.rating}/5 rating
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {material.downloads} downloads
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      PDF Format • Free Download
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary-light border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need More Study Materials?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our premium membership to access exclusive study materials, mock tests, and personalized guidance.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Premium Content
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyMaterials;