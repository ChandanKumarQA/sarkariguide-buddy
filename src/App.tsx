import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RailwayJobs from "./pages/RailwayJobs";
import JobSearch from "./pages/JobSearch";
import ExamCalendar from "./pages/ExamCalendar";
import StudyMaterials from "./pages/StudyMaterials";
import CurrentAffairs from "./pages/CurrentAffairs";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import Results from "./pages/Results";
import Admissions from "./pages/Admissions";
import AdmitCardsPage from "./pages/admit-cart";
import SSCJobs from "./pages/SSCJobs";
import UPSCJobs from "./pages/UPSCJobs";
import JudicialJobs from "./pages/JudicialJobs";
import BankingJobs from "./pages/BankingJobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/railway-jobs" element={<RailwayJobs />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/exam-calendar" element={<ExamCalendar />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/current-affairs" element={<CurrentAffairs />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/job-details/:jobId" element={<JobDetails />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admit-cards" element={<AdmitCardsPage />} />
          <Route path="/ssc-jobs" element={<SSCJobs />} />
          <Route path="/upsc-jobs" element={<UPSCJobs />} />
          <Route path="/judicial-jobs" element={<JudicialJobs />} />
          <Route path="/banking-jobs" element={<BankingJobs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
