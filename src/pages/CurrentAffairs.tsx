import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const getCurrentDate = () => {
  const today = new Date();
  return today.toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const currentAffairsQuestions = [
  {
    id: 1,
    question: "Who is the current Chief Justice of India (as of 2024)?",
    options: ["Justice D.Y. Chandrachud", "Justice U.U. Lalit", "Justice N.V. Ramana", "Justice S.A. Bobde"],
    correctAnswer: 0,
    category: "Judiciary",
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "Which country hosted the G20 Summit in 2023?",
    options: ["Indonesia", "India", "Brazil", "South Africa"],
    correctAnswer: 1,
    category: "International Relations",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the theme of World Environment Day 2024?",
    options: ["Beat Plastic Pollution", "Land restoration, desertification and drought resilience", "Only One Earth", "Ecosystem Restoration"],
    correctAnswer: 1,
    category: "Environment",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Which Indian mission successfully landed on the Moon's south pole in 2023?",
    options: ["Chandrayaan-2", "Chandrayaan-3", "Mangalyaan", "Aditya L-1"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "Who won the Nobel Prize in Literature in 2023?",
    options: ["Annie Ernaux", "Jon Fosse", "Abdulrazak Gurnah", "Louise Glück"],
    correctAnswer: 1,
    category: "Awards & Honors",
    difficulty: "Hard"
  },
  {
    id: 6,
    question: "What is the current repo rate set by RBI (as of 2024)?",
    options: ["6.50%", "6.25%", "6.75%", "6.00%"],
    correctAnswer: 0,
    category: "Economy",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "Which state launched the 'Mukhyamantri Yuva Udyamita Vikas Abhiyan' scheme?",
    options: ["Uttar Pradesh", "Maharashtra", "Gujarat", "Rajasthan"],
    correctAnswer: 0,
    category: "Government Schemes",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "Who is the current ISRO Chairman?",
    options: ["Dr. K. Sivan", "Dr. S. Somanath", "Dr. A.S. Kiran Kumar", "Dr. Mylswamy Annadurai"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "Which Indian city will host the 2036 Olympic Games (bid submitted)?",
    options: ["Mumbai", "New Delhi", "Ahmedabad", "Pune"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Medium"
  },
  {
    id: 10,
    question: "What is the name of India's first solar mission launched in 2023?",
    options: ["Surya-1", "Aditya L-1", "Solar Orbiter", "Helios-1"],
    correctAnswer: 1,
    category: "Science & Technology",
    difficulty: "Easy"
  },
  {
    id: 11,
    question: "Which country became the 32nd member of NATO in 2023?",
    options: ["Finland", "Sweden", "Ukraine", "Georgia"],
    correctAnswer: 0,
    category: "International Relations",
    difficulty: "Medium"
  },
  {
    id: 12,
    question: "Who is the current Governor of RBI?",
    options: ["Urjit Patel", "Shaktikanta Das", "Raghuram Rajan", "Bimal Jalan"],
    correctAnswer: 1,
    category: "Economy",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "Which Indian state has the highest literacy rate (as per Census 2011)?",
    options: ["Tamil Nadu", "Maharashtra", "Kerala", "Gujarat"],
    correctAnswer: 2,
    category: "General Knowledge",
    difficulty: "Medium"
  },
  {
    id: 14,
    question: "What is the capital of the newly formed state of Telangana?",
    options: ["Warangal", "Hyderabad", "Karimnagar", "Nizamabad"],
    correctAnswer: 1,
    category: "Geography",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "Which organization publishes the World Happiness Report?",
    options: ["World Bank", "UN", "IMF", "WHO"],
    correctAnswer: 1,
    category: "International Organizations",
    difficulty: "Medium"
  },
  {
    id: 16,
    question: "Who won the Booker Prize 2023?",
    options: ["Paul Lynch", "Sarah Bernstein", "Jonathan Escoffery", "Erin Kelly"],
    correctAnswer: 0,
    category: "Awards & Honors",
    difficulty: "Hard"
  },
  {
    id: 17,
    question: "Which Indian player won the Chess World Championship 2023?",
    options: ["Viswanathan Anand", "Gukesh D", "Praggnanandhaa", "Ding Liren"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "Medium"
  },
  {
    id: 18,
    question: "What is the theme of International Women's Day 2024?",
    options: ["Choose to Challenge", "Invest in Women: Accelerate Progress", "Break the Bias", "Gender Equality Today"],
    correctAnswer: 1,
    category: "Important Days",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "Which country will host FIFA World Cup 2026?",
    options: ["Qatar", "Russia", "USA, Canada, Mexico", "Germany"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Easy"
  },
  {
    id: 20,
    question: "Who is the current Chief Election Commissioner of India?",
    options: ["Sushil Chandra", "Rajiv Kumar", "Anup Chandra Pandey", "Sunil Arora"],
    correctAnswer: 1,
    category: "Constitutional Bodies",
    difficulty: "Medium"
  },
  {
    id: 21,
    question: "Which Indian state has launched 'Gruha Lakshmi' scheme?",
    options: ["Karnataka", "Telangana", "Andhra Pradesh", "Tamil Nadu"],
    correctAnswer: 0,
    category: "Government Schemes",
    difficulty: "Medium"
  },
  {
    id: 22,
    question: "What is the new name of Twitter (as changed by Elon Musk)?",
    options: ["Meta", "X", "Tesla Social", "SpaceX Social"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "Which Indian film won the Academy Award for Best Documentary Short Film in 2023?",
    options: ["The Elephant Whisperers", "RRR", "Shantaram", "Period. End of Sentence"],
    correctAnswer: 0,
    category: "Entertainment",
    difficulty: "Medium"
  },
  {
    id: 24,
    question: "Who is the current Defence Minister of India?",
    options: ["Nirmala Sitharaman", "Rajnath Singh", "Amit Shah", "S. Jaishankar"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy"
  },
  {
    id: 25,
    question: "Which organization released the Global Innovation Index 2023?",
    options: ["World Bank", "WIPO", "WEF", "UNCTAD"],
    correctAnswer: 1,
    category: "International Organizations",
    difficulty: "Hard"
  },
  {
    id: 26,
    question: "What is India's rank in the Global Innovation Index 2023?",
    options: ["40th", "42nd", "46th", "50th"],
    correctAnswer: 0,
    category: "Rankings",
    difficulty: "Hard"
  },
  {
    id: 27,
    question: "Which Indian city hosted the G20 Tourism Working Group meeting in 2023?",
    options: ["Goa", "Kerala", "Rajasthan", "Kashmir"],
    correctAnswer: 3,
    category: "Current Events",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "Who is the current External Affairs Minister of India?",
    options: ["Sushma Swaraj", "S. Jaishankar", "Pranab Mukherjee", "Salman Khurshid"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy"
  },
  {
    id: 29,
    question: "Which Indian state declared itself as the first 'Har Ghar Jal' certified state?",
    options: ["Punjab", "Haryana", "Goa", "Sikkim"],
    correctAnswer: 2,
    category: "Government Schemes",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "What is the theme of World Health Day 2024?",
    options: ["Health for All", "My Health, My Right", "Universal Health Coverage", "Mental Health Matters"],
    correctAnswer: 1,
    category: "Important Days",
    difficulty: "Medium"
  },
  {
    id: 31,
    question: "Which country hosted COP28 climate summit in 2023?",
    options: ["Egypt", "UK", "UAE", "India"],
    correctAnswer: 2,
    category: "Environment",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Who won the 2023 Cricket World Cup?",
    options: ["India", "Australia", "England", "New Zealand"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "Which Indian startup became a unicorn in 2024 with highest valuation?",
    options: ["Zepto", "Krutrim", "Ola Electric", "Meesho"],
    correctAnswer: 1,
    category: "Business",
    difficulty: "Hard"
  },
  {
    id: 34,
    question: "What is the current FDI limit in insurance sector in India?",
    options: ["49%", "74%", "100%", "51%"],
    correctAnswer: 1,
    category: "Economy",
    difficulty: "Medium"
  },
  {
    id: 35,
    question: "Which Indian port is being developed as India's first green hydrogen hub?",
    options: ["Mumbai Port", "Kandla Port", "Paradip Port", "Tuticorin Port"],
    correctAnswer: 2,
    category: "Infrastructure",
    difficulty: "Hard"
  },
  {
    id: 36,
    question: "Who is the current CAG (Comptroller and Auditor General) of India?",
    options: ["Girish Chandra Murmu", "Rajiv Mehrishi", "Shashi Kant Sharma", "Vinod Rai"],
    correctAnswer: 0,
    category: "Constitutional Bodies",
    difficulty: "Medium"
  },
  {
    id: 37,
    question: "Which Indian mathematician was recently awarded the Abel Prize?",
    options: ["C.R. Rao", "Srinivasa Ramanujan", "Harish Chandra", "M.S. Narasimhan"],
    correctAnswer: 0,
    category: "Awards & Honors",
    difficulty: "Hard"
  },
  {
    id: 38,
    question: "What is the name of India's first indigenous aircraft carrier?",
    options: ["INS Vikrant", "INS Vikramaditya", "INS Viraat", "INS Arihant"],
    correctAnswer: 0,
    category: "Defence",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "Which Indian state launched 'Mukhyamantri Kanya Utthan Yojana'?",
    options: ["Uttar Pradesh", "Bihar", "Jharkhand", "Odisha"],
    correctAnswer: 1,
    category: "Government Schemes",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "Who is the current Speaker of Lok Sabha?",
    options: ["Sumitra Mahajan", "Om Birla", "Meira Kumar", "Somnath Chatterjee"],
    correctAnswer: 1,
    category: "Parliament",
    difficulty: "Easy"
  },
  {
    id: 41,
    question: "Which Indian city will host the 2025 World University Games?",
    options: ["New Delhi", "Mumbai", "Bengaluru", "Pune"],
    correctAnswer: 2,
    category: "Sports",
    difficulty: "Hard"
  },
  {
    id: 42,
    question: "What is the current GST rate on essential items?",
    options: ["0%", "5%", "12%", "18%"],
    correctAnswer: 0,
    category: "Economy",
    difficulty: "Medium"
  },
  {
    id: 43,
    question: "Which organization publishes the World Press Freedom Index?",
    options: ["UNESCO", "Reporters Without Borders", "Freedom House", "Committee to Protect Journalists"],
    correctAnswer: 1,
    category: "International Organizations",
    difficulty: "Hard"
  },
  {
    id: 44,
    question: "Who is the current Union Home Minister of India?",
    options: ["Rajnath Singh", "Amit Shah", "P. Chidambaram", "Sushilkumar Shinde"],
    correctAnswer: 1,
    category: "Politics",
    difficulty: "Easy"
  },
  {
    id: 45,
    question: "Which Indian mission aims to achieve net-zero emissions by 2070?",
    options: ["Mission Shakti", "Mission LiFE", "Mission Innovation", "Mission 2070"],
    correctAnswer: 1,
    category: "Environment",
    difficulty: "Medium"
  },
  {
    id: 46,
    question: "What is the name of India's digital health ID program?",
    options: ["Ayushman Digital", "Health ID", "ABHA", "DigiHealth"],
    correctAnswer: 2,
    category: "Healthcare",
    difficulty: "Medium"
  },
  {
    id: 47,
    question: "Which Indian state has the largest coal reserves?",
    options: ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
    correctAnswer: 0,
    category: "Geography",
    difficulty: "Medium"
  },
  {
    id: 48,
    question: "Who won the 2024 Australian Open Men's Singles title?",
    options: ["Novak Djokovic", "Jannik Sinner", "Rafael Nadal", "Carlos Alcaraz"],
    correctAnswer: 1,
    category: "Sports",
    difficulty: "Medium"
  },
  {
    id: 49,
    question: "Which Indian company became the first to achieve $100 billion market cap in IT sector?",
    options: ["TCS", "Infosys", "Wipro", "HCL"],
    correctAnswer: 0,
    category: "Business",
    difficulty: "Easy"
  },
  {
    id: 50,
    question: "What is the theme of International Yoga Day 2024?",
    options: ["Yoga for Peace", "Yoga for Humanity", "Yoga for Self and Society", "Yoga for One World, One Health"],
    correctAnswer: 3,
    category: "Important Days",
    difficulty: "Medium"
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    "Judiciary": "bg-blue-100 text-blue-800",
    "International Relations": "bg-green-100 text-green-800",
    "Environment": "bg-emerald-100 text-emerald-800",
    "Science & Technology": "bg-purple-100 text-purple-800",
    "Awards & Honors": "bg-yellow-100 text-yellow-800",
    "Economy": "bg-orange-100 text-orange-800",
    "Government Schemes": "bg-pink-100 text-pink-800",
    "Sports": "bg-red-100 text-red-800",
    "General Knowledge": "bg-indigo-100 text-indigo-800",
    "Geography": "bg-teal-100 text-teal-800",
    "International Organizations": "bg-cyan-100 text-cyan-800",
    "Important Days": "bg-violet-100 text-violet-800",
    "Technology": "bg-slate-100 text-slate-800",
    "Entertainment": "bg-rose-100 text-rose-800",
    "Politics": "bg-amber-100 text-amber-800",
    "Rankings": "bg-lime-100 text-lime-800",
    "Current Events": "bg-sky-100 text-sky-800",
    "Business": "bg-fuchsia-100 text-fuchsia-800",
    "Infrastructure": "bg-stone-100 text-stone-800",
    "Constitutional Bodies": "bg-zinc-100 text-zinc-800",
    "Defence": "bg-neutral-100 text-neutral-800",
    "Parliament": "bg-gray-100 text-gray-800",
    "Healthcare": "bg-green-200 text-green-900"
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const CurrentAffairs = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    currentAffairsQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const totalPages = Math.ceil(currentAffairsQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = currentAffairsQuestions.slice(startIndex, endIndex);

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
            <span className="text-foreground font-medium">Current Affairs</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Daily Current Affairs Quiz
              </h1>
              <p className="text-muted-foreground">
                Test your knowledge with today's current affairs questions - Updated {getCurrentDate()}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                Updated Today
              </div>
              <Link to="/">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Quiz Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{currentAffairsQuestions.length}</div>
                <div className="text-sm text-muted-foreground">Total Questions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Object.keys(selectedAnswers).length}
                </div>
                <div className="text-sm text-muted-foreground">Answered</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {currentAffairsQuestions.length - Object.keys(selectedAnswers).length}
                </div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {showResults ? `${calculateScore()}/${currentAffairsQuestions.length}` : '--'}
                </div>
                <div className="text-sm text-muted-foreground">Score</div>
              </CardContent>
            </Card>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {currentQuestions.map((question, index) => (
              <Card key={question.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Q{startIndex + index + 1}
                        </span>
                        <Badge className={getCategoryColor(question.category)}>
                          {question.category}
                        </Badge>
                        <Badge variant="outline">{question.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {question.question}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = selectedAnswers[question.id] === optionIndex;
                      const isCorrect = optionIndex === question.correctAnswer;
                      const showCorrectAnswer = showResults;
                      
                      return (
                        <div
                          key={optionIndex}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            isSelected
                              ? showCorrectAnswer
                                ? isCorrect
                                  ? "border-green-500 bg-green-50"
                                  : "border-red-500 bg-red-50"
                                : "border-primary bg-primary/5"
                              : showCorrectAnswer && isCorrect
                              ? "border-green-500 bg-green-50"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => !showResults && handleAnswerSelect(question.id, optionIndex)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? showCorrectAnswer
                                  ? isCorrect
                                    ? "border-green-500 bg-green-500"
                                    : "border-red-500 bg-red-500"
                                  : "border-primary bg-primary"
                                : showCorrectAnswer && isCorrect
                                ? "border-green-500 bg-green-500"
                                : "border-gray-300"
                            }`}>
                              {(isSelected && showCorrectAnswer && isCorrect) || (showCorrectAnswer && isCorrect) ? (
                                <CheckCircle className="h-4 w-4 text-white" />
                              ) : isSelected ? (
                                <div className="w-2 h-2 rounded-full bg-white" />
                              ) : null}
                            </div>
                            <span className={`${
                              isSelected && showResults && !isCorrect ? "text-red-700" : 
                              showResults && isCorrect ? "text-green-700" : 
                              "text-foreground"
                            }`}>
                              {option}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className="w-10 h-10"
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>

          {/* Submit Button */}
          {!showResults && (
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/90"
                disabled={Object.keys(selectedAnswers).length === 0}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Submit Quiz & View Results
              </Button>
            </div>
          )}

          {/* Results Summary */}
          {showResults && (
            <Card className="mt-8 bg-primary-light border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Quiz Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {calculateScore()}/{currentAffairsQuestions.length}
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  You scored {Math.round((calculateScore() / currentAffairsQuestions.length) * 100)}%
                </p>
                <div className="flex justify-center gap-4">
                  <Button onClick={() => window.location.reload()}>
                    Retake Quiz
                  </Button>
                  <Link to="/study-materials">
                    <Button variant="outline">
                      Study Materials
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CurrentAffairs;