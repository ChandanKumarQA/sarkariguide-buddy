import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JobSearch = () => {
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
            <span className="text-foreground font-medium">Job Search</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Advanced Job Search
              </h1>
              <p className="text-muted-foreground">
                Find your perfect government job with advanced filters
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
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Job title or keywords..." className="pl-10" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Location..." className="pl-10" />
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Filter className="h-4 w-4 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Advanced Search Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6">
              We're working on building comprehensive search functionality with advanced filters.
            </p>
            <Link to="/">
              <Button variant="outline">
                Browse Current Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobSearch;