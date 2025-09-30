const API_BASE_URL = 'http://localhost:3001/api';

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  posts: number;
  lastDate: string;
  status: string;
  category: string;
  salaryRange: string;
  applicationUrl: string;
  eligibility: string;
  ageLimit: string;
  notificationNumber?: string;
  examDate?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  jobDetails?: any;
  examPatterns?: any[];
  importantDates?: any[];
  syllabus?: any[];
}

export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  category: string;
  size: string;
  pages: string;
  rating: number;
  downloads: string;
  difficulty: string;
  previewUrl: string;
  downloadUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface CurrentAffairsQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
  explanation?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExamCalendarEvent {
  id: string;
  title: string;
  organization: string;
  examDate: string;
  lastDate: string;
  category: string;
  description?: string;
  applicationUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Jobs API
export const jobsApi = {
  async getAll(params?: {
    category?: string;
    status?: string;
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<{ jobs: Job[]; pagination: any }> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.status) searchParams.append('status', params.status);
    if (params?.search) searchParams.append('search', params.search);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/jobs?${searchParams}`);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return response.json();
  },

  async getById(id: string): Promise<Job> {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
    if (!response.ok) throw new Error('Failed to fetch job');
    return response.json();
  },

  async create(job: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>): Promise<Job> {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });
    if (!response.ok) throw new Error('Failed to create job');
    return response.json();
  },

  async update(id: string, job: Partial<Job>): Promise<Job> {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });
    if (!response.ok) throw new Error('Failed to update job');
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete job');
  },
};

// Study Materials API
export const studyMaterialsApi = {
  async getAll(params?: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<{ materials: StudyMaterial[]; pagination: any }> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.search) searchParams.append('search', params.search);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/study-materials?${searchParams}`);
    if (!response.ok) throw new Error('Failed to fetch study materials');
    return response.json();
  },

  async create(material: Omit<StudyMaterial, 'id' | 'createdAt' | 'updatedAt'>): Promise<StudyMaterial> {
    const response = await fetch(`${API_BASE_URL}/study-materials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(material),
    });
    if (!response.ok) throw new Error('Failed to create study material');
    return response.json();
  },
};

// Current Affairs API
export const currentAffairsApi = {
  async getAll(params?: {
    category?: string;
    difficulty?: string;
    page?: number;
    limit?: number;
  }): Promise<{ questions: CurrentAffairsQuestion[]; pagination: any }> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.difficulty) searchParams.append('difficulty', params.difficulty);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/current-affairs?${searchParams}`);
    if (!response.ok) throw new Error('Failed to fetch current affairs');
    return response.json();
  },

  async create(question: Omit<CurrentAffairsQuestion, 'id' | 'createdAt' | 'updatedAt'>): Promise<CurrentAffairsQuestion> {
    const response = await fetch(`${API_BASE_URL}/current-affairs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question),
    });
    if (!response.ok) throw new Error('Failed to create current affairs question');
    return response.json();
  },
};

// Exam Calendar API
export const examCalendarApi = {
  async getAll(params?: {
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<{ events: ExamCalendarEvent[]; pagination: any }> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/exam-calendar?${searchParams}`);
    if (!response.ok) throw new Error('Failed to fetch exam calendar');
    return response.json();
  },

  async create(event: Omit<ExamCalendarEvent, 'id' | 'createdAt' | 'updatedAt'>): Promise<ExamCalendarEvent> {
    const response = await fetch(`${API_BASE_URL}/exam-calendar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    if (!response.ok) throw new Error('Failed to create exam calendar event');
    return response.json();
  },
};

// Categories API
export const categoriesApi = {
  async getAll(): Promise<{
    jobs: string[];
    materials: string[];
    questions: string[];
  }> {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },
};

// Health check
export const healthApi = {
  async check(): Promise<{ status: string; message: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('API is not available');
    return response.json();
  },
};
