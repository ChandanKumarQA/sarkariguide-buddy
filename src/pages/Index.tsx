import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JobCategories from "@/components/JobCategories";
import LatestJobs from "@/components/LatestJobs";
import QuickActions from "@/components/QuickActions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <JobCategories />
      <LatestJobs />
      <QuickActions />
      <Footer />
    </div>
  );
};

export default Index;
