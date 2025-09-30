import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

// Sample study materials data
const studyMaterials = [
  {
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
    title: "Best 4000 Smart Question Bank SSC General Knowledge in English",
    description: "Comprehensive question bank covering all important topics for SSC exams.",
    category: "General Knowledge",
    size: "15 MB",
    pages: "696 pages",
    rating: 4.7,
    downloads: "1.5M+",
    difficulty: "Beginner to Advanced",
    previewUrl: "https://blogmedia.testbook.com/blog/wp-content/uploads/2022/03/best-4000-smart-question-bank-ssc-general-knowledge-in-english-next-generation-smartbook-by-testbook-and-s-chand-026cc109.pdf",
    downloadUrl: "https://blogmedia.testbook.com/blog/wp-content/uploads/2022/03/best-4000-smart-question-bank-ssc-general-knowledge-in-english-next-generation-smartbook-by-testbook-and-s-chand-026cc109.pdf",
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
    previewUrl: "/pdfs/current-affairs-2024.pdf",
    downloadUrl: "/pdfs/current-affairs-2024.pdf",
  },
  {
    title: "Quantitative Aptitude Guide",
    description: "Complete guide for quantitative aptitude with practice questions",
    category: "Quantitative Aptitude",
    size: "30 MB",
    pages: "600 pages",
    rating: 4.6,
    downloads: "1.8M+",
    difficulty: "Intermediate to Advanced",
    previewUrl: "/pdfs/quantitative-aptitude.pdf",
    downloadUrl: "/pdfs/quantitative-aptitude.pdf",
  }
];

// Sample current affairs questions
const currentAffairsQuestions = [
  {
    question: "Which state recently launched the 'Mukhyamantri Kanya Utthan Yojana'?",
    options: ["Bihar", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
    correctAnswer: 0,
    category: "Government Schemes",
    difficulty: "Easy",
    explanation: "Bihar government launched Mukhyamantri Kanya Utthan Yojana to promote girl child education and empowerment."
  },
  {
    question: "What is the theme of World Environment Day 2024?",
    options: ["Ecosystem Restoration", "Beat Plastic Pollution", "Only One Earth", "Land Restoration"],
    correctAnswer: 0,
    category: "Environment",
    difficulty: "Medium",
    explanation: "The theme for World Environment Day 2024 is 'Ecosystem Restoration' focusing on reviving degraded ecosystems."
  },
  {
    question: "Which organization recently launched the 'Digital India RISC-V' program?",
    options: ["NITI Aayog", "Ministry of Electronics and IT", "ISRO", "DRDO"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "Hard",
    explanation: "Ministry of Electronics and IT launched Digital India RISC-V program to promote open-source processor architecture."
  }
];

// Sample exam calendar events
const examCalendarEvents = [
  {
    title: "UPSC Civil Services Preliminary Examination 2024",
    organization: "Union Public Service Commission",
    examDate: "2024-06-16",
    lastDate: "2024-03-05",
    category: "UPSC",
    description: "Preliminary examination for Civil Services",
    applicationUrl: "https://www.upsc.gov.in/"
  },
  {
    title: "SSC CGL Tier-I Examination 2024",
    organization: "Staff Selection Commission",
    examDate: "2024-07-14",
    lastDate: "2024-04-24",
    category: "SSC",
    description: "Combined Graduate Level Examination Tier-I",
    applicationUrl: "https://ssc.nic.in/"
  },
  {
    title: "IBPS PO Preliminary Examination 2024",
    organization: "Institute of Banking Personnel Selection",
    examDate: "2024-08-17",
    lastDate: "2024-05-28",
    category: "Banking",
    description: "Probationary Officer Preliminary Examination",
    applicationUrl: "https://www.ibps.in/"
  }
];

async function migrateData() {
  try {
    console.log('Starting data migration...');

    // Read existing job data from JSON file
    const jobDataPath = path.join(__dirname, 'public', 'job.json');
    const jobData = JSON.parse(fs.readFileSync(jobDataPath, 'utf8'));

    // Migrate jobs
    console.log('Migrating jobs...');
    for (const job of jobData) {
      await prisma.job.upsert({
        where: { id: job.id },
        update: job,
        create: job
      });
    }

    // Migrate study materials
    console.log('Migrating study materials...');
    for (const material of studyMaterials) {
      await prisma.studyMaterial.create({
        data: material
      });
    }

    // Migrate current affairs questions
    console.log('Migrating current affairs questions...');
    for (const question of currentAffairsQuestions) {
      await prisma.currentAffairsQuestion.create({
        data: question
      });
    }

    // Migrate exam calendar events
    console.log('Migrating exam calendar events...');
    for (const event of examCalendarEvents) {
      await prisma.examCalendar.create({
        data: event
      });
    }

    console.log('Data migration completed successfully!');
    
    // Display summary
    const jobCount = await prisma.job.count();
    const materialCount = await prisma.studyMaterial.count();
    const questionCount = await prisma.currentAffairsQuestion.count();
    const eventCount = await prisma.examCalendar.count();

    console.log('\nDatabase Summary:');
    console.log(`- Jobs: ${jobCount}`);
    console.log(`- Study Materials: ${materialCount}`);
    console.log(`- Current Affairs Questions: ${questionCount}`);
    console.log(`- Exam Calendar Events: ${eventCount}`);

  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run migration if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  migrateData();
}

export { migrateData };
