import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Database API is running' });
});

// Jobs API endpoints
app.get('/api/jobs', async (req, res) => {
  try {
    const { category, status, search, page = 1, limit = 10 } = req.query;
    
    const where = {};
    
    if (category && category !== 'All') {
      where.category = category;
    }
    
    if (status && status !== 'All') {
      where.status = status;
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { organization: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } }
      ];
    }

    const jobs = await prisma.job.findMany({
      where,
      include: {
        jobDetails: true,
        examPatterns: true,
        importantDates: true,
        syllabus: true
      },
      skip: (page - 1) * limit,
      take: parseInt(limit),
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.job.count({ where });

    res.json({
      jobs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await prisma.job.findUnique({
      where: { id: req.params.id },
      include: {
        jobDetails: true,
        examPatterns: true,
        importantDates: true,
        syllabus: true
      }
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const job = await prisma.job.create({
      data: req.body,
      include: {
        jobDetails: true,
        examPatterns: true,
        importantDates: true,
        syllabus: true
      }
    });

    res.status(201).json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

app.put('/api/jobs/:id', async (req, res) => {
  try {
    const job = await prisma.job.update({
      where: { id: req.params.id },
      data: req.body,
      include: {
        jobDetails: true,
        examPatterns: true,
        importantDates: true,
        syllabus: true
      }
    });

    res.json(job);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

app.delete('/api/jobs/:id', async (req, res) => {
  try {
    await prisma.job.delete({
      where: { id: req.params.id }
    });

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// Study Materials API endpoints
app.get('/api/study-materials', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    
    const where = {};
    
    if (category && category !== 'All') {
      where.category = category;
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    const materials = await prisma.studyMaterial.findMany({
      where,
      skip: (page - 1) * limit,
      take: parseInt(limit),
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.studyMaterial.count({ where });

    res.json({
      materials,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching study materials:', error);
    res.status(500).json({ error: 'Failed to fetch study materials' });
  }
});

app.post('/api/study-materials', async (req, res) => {
  try {
    const material = await prisma.studyMaterial.create({
      data: req.body
    });

    res.status(201).json(material);
  } catch (error) {
    console.error('Error creating study material:', error);
    res.status(500).json({ error: 'Failed to create study material' });
  }
});

// Current Affairs API endpoints
app.get('/api/current-affairs', async (req, res) => {
  try {
    const { category, difficulty, page = 1, limit = 10 } = req.query;
    
    const where = {};
    
    if (category && category !== 'All') {
      where.category = category;
    }
    
    if (difficulty && difficulty !== 'All') {
      where.difficulty = difficulty;
    }

    const questions = await prisma.currentAffairsQuestion.findMany({
      where,
      skip: (page - 1) * limit,
      take: parseInt(limit),
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.currentAffairsQuestion.count({ where });

    res.json({
      questions,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching current affairs:', error);
    res.status(500).json({ error: 'Failed to fetch current affairs' });
  }
});

app.post('/api/current-affairs', async (req, res) => {
  try {
    const question = await prisma.currentAffairsQuestion.create({
      data: req.body
    });

    res.status(201).json(question);
  } catch (error) {
    console.error('Error creating current affairs question:', error);
    res.status(500).json({ error: 'Failed to create current affairs question' });
  }
});

// Exam Calendar API endpoints
app.get('/api/exam-calendar', async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    
    const where = {};
    
    if (category && category !== 'All') {
      where.category = category;
    }

    const events = await prisma.examCalendar.findMany({
      where,
      skip: (page - 1) * limit,
      take: parseInt(limit),
      orderBy: { examDate: 'asc' }
    });

    const total = await prisma.examCalendar.count({ where });

    res.json({
      events,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching exam calendar:', error);
    res.status(500).json({ error: 'Failed to fetch exam calendar' });
  }
});

app.post('/api/exam-calendar', async (req, res) => {
  try {
    const event = await prisma.examCalendar.create({
      data: req.body
    });

    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating exam calendar event:', error);
    res.status(500).json({ error: 'Failed to create exam calendar event' });
  }
});

// Categories API endpoint
app.get('/api/categories', async (req, res) => {
  try {
    const jobCategories = await prisma.job.findMany({
      select: { category: true },
      distinct: ['category']
    });

    const materialCategories = await prisma.studyMaterial.findMany({
      select: { category: true },
      distinct: ['category']
    });

    const questionCategories = await prisma.currentAffairsQuestion.findMany({
      select: { category: true },
      distinct: ['category']
    });

    res.json({
      jobs: jobCategories.map(item => item.category),
      materials: materialCategories.map(item => item.category),
      questions: questionCategories.map(item => item.category)
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Database API server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
