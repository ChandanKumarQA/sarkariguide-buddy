# Database Setup and Usage

This document explains how to set up and use the database for the SarkariGuide Buddy application.

## Database Architecture

The application uses **SQLite** as the database with **Prisma ORM** for type-safe database operations. The database includes the following models:

### Core Models

1. **Job** - Government job postings
2. **JobDetails** - Detailed job information
3. **ExamPattern** - Exam patterns for jobs
4. **ImportantDate** - Important dates for jobs
5. **Syllabus** - Syllabus for jobs
6. **StudyMaterial** - Study materials and resources
7. **CurrentAffairsQuestion** - Current affairs quiz questions
8. **ExamCalendar** - Exam calendar events
9. **User** - User accounts (for future features)
10. **JobAlert** - User job alerts
11. **SavedJob** - User saved jobs

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate Prisma Client

```bash
npm run db:generate
```

### 3. Run Database Migrations

```bash
npm run db:migrate
```

### 4. Seed the Database

```bash
npm run db:seed
```

### 5. Start the API Server

```bash
npm run server
```

The API server will run on `http://localhost:3001`

### 6. Start the Frontend

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Database Management Commands

```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio

# Reset database
npm run db:reset

# Start API server
npm run server
```

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs with filtering
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Study Materials
- `GET /api/study-materials` - Get all study materials
- `POST /api/study-materials` - Create new study material

### Current Affairs
- `GET /api/current-affairs` - Get current affairs questions
- `POST /api/current-affairs` - Create new question

### Exam Calendar
- `GET /api/exam-calendar` - Get exam calendar events
- `POST /api/exam-calendar` - Create new event

### Categories
- `GET /api/categories` - Get all categories

### Health Check
- `GET /api/health` - Check API status

## Query Parameters

### Jobs API
- `category` - Filter by job category
- `status` - Filter by job status
- `search` - Search in title, organization, location
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

### Study Materials API
- `category` - Filter by material category
- `search` - Search in title and description
- `page` - Page number
- `limit` - Items per page

### Current Affairs API
- `category` - Filter by question category
- `difficulty` - Filter by difficulty level
- `page` - Page number
- `limit` - Items per page

## Database Schema

The database schema is defined in `prisma/schema.prisma`. Key features:

- **SQLite** for local development
- **Type-safe** operations with Prisma
- **Relationships** between models
- **JSON fields** for complex data
- **Timestamps** for all records
- **Cascade deletes** for related data

## Frontend Integration

The frontend uses the database API through the `src/lib/database.ts` service:

```typescript
import { jobsApi, studyMaterialsApi } from '@/lib/database';

// Fetch jobs
const response = await jobsApi.getAll({
  category: 'SSC',
  status: 'Active',
  search: 'engineer'
});

// Fetch study materials
const materials = await studyMaterialsApi.getAll({
  category: 'General Knowledge'
});
```

## Development Workflow

1. **Make schema changes** in `prisma/schema.prisma`
2. **Run migration** with `npm run db:migrate`
3. **Update API endpoints** in `server.js` if needed
4. **Update frontend** components to use new data
5. **Test** with `npm run db:studio`

## Production Considerations

For production deployment:

1. **Use PostgreSQL** instead of SQLite
2. **Set up connection pooling**
3. **Add authentication** to API endpoints
4. **Implement rate limiting**
5. **Add logging and monitoring**
6. **Set up database backups**

## Troubleshooting

### Common Issues

1. **Database locked**: Stop all processes and restart
2. **Migration errors**: Reset database with `npm run db:reset`
3. **API connection issues**: Check if server is running on port 3001
4. **CORS errors**: Ensure API server is running before frontend

### Useful Commands

```bash
# Check database status
npx prisma db push

# View database in browser
npm run db:studio

# Reset everything
npm run db:reset && npm run db:seed
```

## Data Migration

The `migrate-data.js` script populates the database with:

- **11 job postings** from the original JSON file
- **4 study materials** with sample data
- **3 current affairs questions** for testing
- **3 exam calendar events** for upcoming exams

To add more data, modify the migration script or use the API endpoints directly.
