import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft, FileText, Star, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { studyMaterialsApi, StudyMaterial } from "@/lib/database";

const studyMaterials = [
  {
    id: 1,
    title: "Lucent's General Knowledge (Hindi)",
    description: "Comprehensive Hindi guide covering all important topics for competitive exams.",
    category: "General Knowledge",
    size: "45 MB",
    pages: "850 pages",
    rating: 4.8,
    downloads: "2.5M+",
    difficulty: "Beginner to Advanced",
    previewUrl: "/pdfs/lucent-gk-hindi.pdf",
    downloadUrl: "/pdfs/lucent-gk-hindi.pdf",
  },
  {
    id: 2,
    title: "Best 4000 Smart Question Bank SSC General Knowledge in English",
    description: "Comprehensive question bank covering all important topics for SSC exams.",
    category: "General Knowledge",
    size: "Approx. 696 pages",
    pages: "696 pages",
    rating: 4.7,
    downloads: "1.5M+",
    difficulty: "Beginner to Advanced",
    previewUrl: "/pdfs/best-4000-smart-question-bank-ssc-general-knowledge-in-english-next-generation-smartbook-by-testbook-and-s-chand-026cc109.pdf",
    downloadUrl: "/pdfs/best-4000-smart-question-bank-ssc-general-knowledge-in-english-next-generation-smartbook-by-testbook-and-s-chand-026cc109.pdf",
  },
  {
    id: 3,
    title: "Current Affairs 2024",
    description: "Monthly current affairs compilation with important events and facts",
    category: "Current Affairs",
    size: "25 MB",
    pages: "450 pages", 
    rating: 4.9,
    downloads: "3.2M+",
    difficulty: "All Levels",
    previewUrl: "/pdfs/current-affairs-2024.pdf",
    downloadUrl: "/pdfs/current-affairs-2024.pdf",
  },
  {
    id: 4,
    title: "Quantitative Aptitude Guide",
    description: "Complete mathematics and reasoning guide with solved examples",
    category: "Mathematics",
    size: "32 MB",
    pages: "620 pages",
    rating: 4.6,
    downloads: "2.1M+", 
    difficulty: "Beginner to Advanced",
    previewUrl: "/pdfs/lucent-publications-gk.pdf",
    downloadUrl: "/pdfs/lucent-publications-gk.pdf",
  },
  {
    id: 5,
    title: "Logical Reasoning Handbook", 
    description: "Comprehensive reasoning guide with practice questions and solutions",
    category: "Reasoning",
    size: "28 MB",
    pages: "480 pages",
    rating: 4.7,
    downloads: "1.9M+",
    difficulty: "Intermediate",
    previewUrl: "/pdfs/2018/01/lucent-publications-gk.pdf",
    downloadUrl: "/pdfs/2018/01/lucent-publications-gk.pdf",
  },
  {
    id: 6,
    title: "English Grammar & Vocabulary",
    description: "Complete English preparation guide for government exams",
    category: "English",
    size: "22 MB",
    pages: "380 pages",
    rating: 4.5,
    downloads: "1.6M+",
    difficulty: "All Levels",
    previewUrl: "/pdfs/lucent-publications-gk.pdf",
    downloadUrl: "/pdfs/lucent-publications-gk.pdf", // Fixed typo
  },
  {
    id: 7,
    title: "Indian Polity by Laxmikanth",
    description: "Detailed coverage of Indian Constitution and political system",
    category: "Polity",
    size: "42 MB", 
    pages: "780 pages",
    rating: 4.9,
    downloads: "2.8M+",
    difficulty: "Advanced",
    previewUrl: "/pdfs/2018/01/lucent-publications-gk.pdf",
    downloadUrl: "/pdfs/2018/01/lucent-publications-gk.pdf",
  },
  {
    id: 8,
    title: "Economic Survey 2024",
    description: "Latest economic survey with important facts and figures",
    category: "Economics",
    size: "18 MB",
    pages: "320 pages", 
    rating: 4.4,
    downloads: "1.3M+",
    difficulty: "Intermediate",
    previewUrl: "/pdfs/lucent-publications-gk.pdf",
    downloadUrl: "/pdfs/lucent-publications-gk.pdf",
  },
  {
    id: 9,
    title: "Science & Technology Manual",
    description: "Latest developments in science and technology for competitive exams",
    category: "Science",
    size: "35 MB",
    pages: "560 pages",
    rating: 4.6,
    downloads: "1.7M+",
    difficulty: "Intermediate",
    previewUrl: "/pdfs/lucent-publications-gk.pdf",
    downloadUrl: "/pdfs/lucent-publications-gk.pdf",
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
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        // Try to fetch from API first
        const response = await studyMaterialsApi.getAll();
        setMaterials(response.materials);
      } catch (error) {
        console.error('Error fetching study materials:', error);
        // Fallback to hardcoded data if API fails
        setMaterials(studyMaterials.map(mat => ({
          ...mat,
          id: mat.id.toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const handleDownload = (material: StudyMaterial) => {
    // Direct download from the PDF URL
    window.open(material.downloadUrl, '_blank');
  };

  const handlePreview = (material: StudyMaterial) => {
    // Set the selected material to show its details
    setSelectedMaterial(material);
  };

  const handleClosePreview = () => {
    setSelectedMaterial(null);
  };

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
              Showing {materials.length} study materials available for download
            </p>
          </div>

          <div className="grid gap-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2 text-muted-foreground">Loading study materials...</p>
              </div>
            ) : (
              materials.map((material) => (
              <Card key={material.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle 
                          className="text-xl hover:text-primary cursor-pointer transition-colors"
                          onClick={() => handlePreview(material)}
                        >
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
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handlePreview(material)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => handleDownload(material)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
            )}
          </div>

          {/* Material Detail Modal */}
          {selectedMaterial && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{selectedMaterial.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getCategoryColor(selectedMaterial.category)}>
                          {selectedMaterial.category}
                        </Badge>
                        <Badge variant="outline">{selectedMaterial.difficulty}</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" onClick={handleClosePreview}>×</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{selectedMaterial.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">Pages:</span>
                        <span className="text-sm ml-2">{selectedMaterial.pages}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">Size:</span>
                        <span className="text-sm ml-2">{selectedMaterial.size}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        <span className="text-sm font-medium">Rating:</span>
                        <span className="text-sm ml-2">{selectedMaterial.rating}/5</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">Downloads:</span>
                        <span className="text-sm ml-2">{selectedMaterial.downloads}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => window.open(selectedMaterial.previewUrl, '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview PDF
                    </Button>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => handleDownload(selectedMaterial)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

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
