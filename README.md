# Mind-Bloom: Mindful Journaling with AI Affirmations


> *"Find joy in the simplicity of each moment."*

Mind-Bloom is a mindfulness journaling application that combines personal reflection with AI-powered mood-based affirmations. The application helps users track their emotional well-being through daily journaling while providing meaningful, mood-appropriate affirmations to inspire positive thinking.

## 🌟 Features

- **Secure User Authentication**: Register and login with JWT-based authentication
- **Daily Journaling**: Record your thoughts and feelings with date and mood tracking
- **Personalized Affirmations**: Receive mood-based affirmations that match your emotional state
- **Daily Quotes**: New inspirational quotes are collected and analyzed daily
- **Journal History**: Review past entries organized by date
- **Responsive API**: Backend designed to support multiple client applications

## 🛠️ Technology Stack

- **Backend**: Node.js, TypeScript, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **External APIs**: OpenAI for quote generation and analysis
- **Testing**: Vitest for unit testing
- **CI/CD**: GitHub Actions for continuous integration
- **Containerization**: Docker
- **Hosting**: Configured for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js v20 or higher
- PostgreSQL 17
- OpenAI API key for quote generation

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Meghan31/mind-bloom-prod.git
   cd mind-bloom-prod
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit .env file with your database credentials and OpenAI API key
   source .env
   ```

4. Set up the database
   ```bash
   npm run migrate
   npm run prisma:seed
   ```

5. Run tests to verify setup
   ```bash
   npm run test
   ```

### Running the Application

1. Start the application server
   ```bash
   npm run start
   ```

2. Navigate to [localhost:8080](http://localhost:8080) to access the application

### Collector and Analyzer

The data collector and analyzer to populate the database with quotes
   ```bash
   npm run collect
   npm run analyze
   ```

### Development Mode

For frontend development with hot-reloading:
```bash
cd frontend
npm run dev
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token
- `GET /api/auth/verify` - Verify JWT token validity

### Journal
- `POST /api/journal` - Create a new journal entry
- `GET /api/journal` - Get all journal entries for the logged-in user
- `GET /api/journal/:id` - Get a specific journal entry by ID
- `GET /api/journal/date/:date` - Get entries for a specific date

### Affirmations
- `GET /api/affirmation/today` - Get today's affirmation for a specific mood
- `GET /api/affirmations/:mood` - Get all affirmations for a specific mood

### Health and Version
- `GET /health` - Check application health
- `GET /api/version` - Get API version information

## 🐳 Docker Deployment

Build and run with Docker:

```bash
# Build container
npm run build
docker build -t mind-bloom .

# Run container
docker run --env-file .env.docker -p 8080:8080 mind-bloom
```

## 🧪 Testing

Run tests with:

```bash
npm run test
```

Database connection tests:

```bash
npm run test:db
npm run test:postgres
npm run test:network
```

## 📈 Architecture

Mind-Bloom consists of three main components:

1. **Data Collector**: A background process that collects data from OpenAI's API
2. **Data Analyzer**: A process that analyzes collected quotes and categorizes them by mood
3. **Web Application**: The Express.js API serving journal entries and affirmations

## 📝 Daily Quote Collection

Mind-Bloom automatically collects and analyzes new quotes daily using a Google Cloud Run's Job Scheduler. This ensures that users always have fresh, inspiring content.

## 🔄 Database Schema

The application uses three main models:

- **User**: Authentication and user profile information
- **Affirmation**: Mood-based affirmations categorized by emotional states
- **JournalEntry**: User journal entries with content, mood, and associated affirmations

---
Built with ❤️ by Meghan31 | Mind-Bloom: Nurturing your mental wellness journey, one journal entry at a time.
