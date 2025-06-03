# NewsBreeze

NewsBreeze is a MERN stack news aggregation application with AI-powered features that delivers real-time news with text summarization and celebrity voice narration.

![NewsBreeze](https://via.placeholder.com/800x400?text=NewsBreeze+App)

## 🚀 Features

- **Real-time News Aggregation**: Fetches latest news from multiple RSS feeds (CNN, BBC, Reuters, NPR)
- **AI-Powered Summarization**: Uses Hugging Face's Falconsai/text_summarization model to create concise summaries
- **Celebrity Voice Narration**: Converts summaries to audio using coqui/XTTS-v2 voice cloning technology
- **Responsive Glassmorphism UI**: Modern, clean interface with glassmorphism design elements
- **Audio Playback Controls**: Play/pause functionality for voice narration

## 🛠️ Technology Stack

### Frontend
- **Framework**: React (functional components only)
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Styling**: Custom CSS with glassmorphism effects

### Backend
- **Server**: Node.js with Express
- **News Fetching**: RSS-Parser
- **HTTP Client**: Axios
- **Environment Variables**: dotenv

### AI Integration
- **Text Summarization**: Hugging Face API (Falconsai/text_summarization)
- **Voice Generation**: Hugging Face API (coqui/XTTS-v2)

## 📋 Project Structure

```
├── backend/                # Express server
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── server.js           # Server entry point
│
└── frontend/               # React application
    ├── public/             # Static assets
    └── src/                # Source code
        ├── components/     # UI components
        ├── hooks/          # Custom React hooks
        ├── services/       # API service functions
        └── App.jsx         # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Hugging Face API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/newsbreeze.git
   cd newsbreeze
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   HUGGING_FACE_API_TOKEN=your_hugging_face_api_token
   ```

4. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## 🎭 Available Celebrity Voices

- Morgan Freeman
- David Attenborough
- Scarlett Johansson
- Samuel L. Jackson
- Emma Stone

## 🧩 Core Functionality

### News Fetching
The application fetches the latest news from multiple RSS feeds using the `rss-parser` library. The news items are then processed and sorted by publication date.

### Text Summarization
Long news articles are summarized using Hugging Face's text summarization model to provide concise, readable summaries.

### Voice Generation
The application uses the coqui/XTTS-v2 model to convert text summaries into audio narrations with celebrity-like voices.

## 🔒 API Endpoints

### News API
- `GET /api/news`: Get latest news articles
- `GET /api/news/summaries`: Get news articles with AI-generated summaries

### Summary API
- `POST /api/summary`: Generate a summary for provided text

### Voice API
- `POST /api/voice/generate`: Generate voice audio for provided text with selected voice

## 🎨 UI Design

NewsBreeze features a modern glassmorphism design with:
- Gradient background
- Semi-transparent cards with blur effect
- Smooth animations and transitions
- Responsive layout for all device sizes

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Hugging Face](https://huggingface.co/) for providing AI models
- [RSS feeds](https://rss.com/) from CNN, BBC, Reuters, and NPR
- [Lucide Icons](https://lucide.dev/) for beautiful UI icons