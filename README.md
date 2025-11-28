# AI Medical Chatbot Dashboard

A full-stack AI-powered medical chatbot application that provides personalized healthcare insights using BioGPT, a specialized Large Language Model for medical applications.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)

## 🎯 Overview

AI Medical Chatbot Dashboard is an intelligent healthcare assistant designed to help users receive preliminary medical insights based on their health data. The application leverages **BioGPT** (Microsoft's biomedical language model) to analyze user inputs and provide evidence-based recommendations, helping users understand whether they should seek medical attention or can manage their condition with self-care.

> **Disclaimer**: This chatbot is not a replacement for professional medical advice. Always consult with licensed healthcare professionals for medical decisions.

## ✨ Features

- **🔐 Secure Authentication**: User registration and login with password hashing and JWT-based session management
- **💬 AI-Powered Chat**: Real-time medical consultation using BioGPT Large Language Model
- **📊 Chat History**: Persistent storage of all conversations for future reference
- **🎨 Modern UI**: Responsive React interface with TailwindCSS and Bootstrap styling
- **🔒 Data Privacy**: Secure PostgreSQL database for storing user data and chat history
- **⚡ Fast API**: High-performance FastAPI backend with async support
- **🤖 Intelligent Responses**: Context-aware medical recommendations using transformer-based AI

## 🛠 Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework for building interactive components |
| **React Router DOM** | 7.0.1 | Client-side routing and navigation |
| **Redux** | 5.0.1 | State management |
| **Axios** | 1.7.7 | HTTP client for API requests |
| **Bootstrap** | 5.3.3 | CSS framework for responsive design |
| **TailwindCSS** | 3.4.15 | Utility-first CSS framework |
| **FontAwesome** | 6.7.1 | Icon library |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.12+ | Programming language |
| **FastAPI** | Latest | Modern web framework for building APIs |
| **Uvicorn** | Latest | ASGI server for FastAPI |
| **SQLAlchemy** | Latest | ORM for database operations |
| **Pydantic** | Latest | Data validation using Python type hints |
| **PostgreSQL** | Latest | Relational database |
| **psycopg2** | Latest | PostgreSQL adapter for Python |

### AI/ML
| Technology | Purpose |
|------------|---------|
| **PyTorch** | 1.9.0+ | Deep learning framework |
| **Transformers** | 4.0.0+ | Hugging Face library for NLP models |
| **BioGPT-Large** | Microsoft's biomedical language model |
| **Hugging Face Hub** | Model hosting and authentication |

## 🏗 System Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│  React Frontend │◄───────►│  FastAPI Backend│◄───────►│   PostgreSQL    │
│                 │  HTTP   │                 │  SQL    │    Database     │
│  - Components   │         │  - Routers      │         │  - Users        │
│  - Pages        │         │  - Services     │         │  - Chats        │
│  - State Mgmt   │         │  - Models       │         │                 │
└─────────────────┘         └────────┬────────┘         └─────────────────┘
                                     │
                                     │ API Calls
                                     ▼
                            ┌─────────────────┐
                            │                 │
                            │  BioGPT Model   │
                            │  (Hugging Face) │
                            │                 │
                            │  - Tokenizer    │
                            │  - Generator    │
                            └─────────────────┘
```

### Data Flow

1. **User Authentication**: User signs up/logs in → Credentials validated → JWT token issued
2. **Chat Interaction**: User sends message → Backend processes → BioGPT generates response → Response stored in DB → Returned to user
3. **Chat History**: User requests history → Backend queries DB → Returns all previous conversations

## 📁 Project Structure

```
AI-Medical-Chatbot-Dashboard/
├── Backend/
│   ├── app/
│   │   ├── config.py              # Application configuration
│   │   ├── main.py                # FastAPI application entry point
│   │   ├── database/
│   │   │   ├── postgresql.py      # PostgreSQL connection setup
│   │   │   └── mongodb.py         # MongoDB connection (optional)
│   │   ├── models/
│   │   │   ├── user.py            # User database model
│   │   │   ├── chat.py            # Chat database model
│   │   │   └── health_data.py     # Health data model
│   │   ├── routers/
│   │   │   ├── auth.py            # Authentication endpoints
│   │   │   ├── chatbot.py         # Chatbot endpoints
│   │   │   ├── health.py          # Health data endpoints
│   │   │   └── profile.py         # User profile endpoints
│   │   ├── schemas/
│   │   │   └── auth.py            # Pydantic schemas
│   │   ├── services/
│   │   │   ├── chatbot.py         # BioGPT integration
│   │   │   └── health_dashboard.py
│   │   └── utils/
│   │       ├── hashing.py         # Password hashing utilities
│   │       └── jwt_handler.py     # JWT token management
│   ├── requirements.txt           # Python dependencies
│   └── .env                       # Environment variables
│
└── Frontend/
    ├── public/                    # Static assets
    ├── src/
    │   ├── App.js                 # Main application component
    │   ├── index.js               # Application entry point
    │   ├── components/
    │   │   ├── HeroSection.js     # Landing page component
    │   │   ├── SignUp.js          # Registration component
    │   │   ├── Login.js           # Login component
    │   │   └── ChatPage.js        # Chat interface component
    │   ├── pages/
    │   │   ├── Homepage.js        # Home page
    │   │   ├── DashboardPage.js   # User dashboard
    │   │   └── ChatPage.js        # Chat page
    │   └── utils/
    │       ├── api.js             # API client configuration
    │       └── auth.js            # Authentication utilities
    ├── package.json               # Node.js dependencies
    └── tailwind.config.js         # TailwindCSS configuration
```

## 🚀 Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **Python** (v3.12 or higher)
- **PostgreSQL** (v12 or higher)
- **Git**

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayodeji90/AI-Medical-Chatbot-Dashboard.git
   cd AI-Medical-Chatbot-Dashboard
   ```

2. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

3. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up PostgreSQL database**
   ```bash
   # Login to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE medical_chatbot;
   ```

6. **Configure environment variables**
   
   Create a `.env` file in the `Backend` directory:
   ```env
   POSTGRES_URL=postgresql://postgres:your_password@localhost:5432/medical_chatbot
   MONGODB_URL=mongodb://localhost:27017  # Optional
   SECRET_KEY=your-secret-key-here
   ALGORITHM=HS256
   ```

7. **Start the backend server**
   ```bash
   cd app
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to Frontend directory**
   ```bash
   cd Frontend
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`

## ⚙️ Configuration

### Backend Configuration

The backend uses environment variables for configuration. Update the `.env` file in the `Backend` directory:

```env
# Database Configuration
POSTGRES_URL=postgresql://username:password@host:port/database_name
MONGODB_URL=mongodb://localhost:27017  # Optional

# Security
SECRET_KEY=your-super-secret-key-change-this
ALGORITHM=HS256

# Hugging Face (for BioGPT)
# Add your Hugging Face token in services/chatbot.py
```

### Frontend Configuration

Update API endpoint in `Frontend/src/utils/api.js` if needed:

```javascript
const API_BASE_URL = 'http://localhost:8000';
```

### BioGPT Model Configuration

In `Backend/app/services/chatbot.py`, add your Hugging Face access token:

```python
huggingface_token = "your_huggingface_token_here"
```

Get your token from [Hugging Face Settings](https://huggingface.co/settings/tokens)

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "terms_agreed": true
}

Response: 201 Created
{
  "message": "User created successfully",
  "user_id": 1
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response: 200 OK
{
  "message": "Login successful",
  "token": "mock-token-for-user-1",
  "user_id": 1
}
```

### Chatbot Endpoints

#### Send Message
```http
POST /chatbot/chat
Content-Type: application/json

{
  "user_id": 1,
  "message": "What are the symptoms of diabetes?"
}

Response: 200 OK
{
  "message": "What are the symptoms of diabetes?",
  "response": "Common symptoms of diabetes include...",
  "timestamp": "2024-11-28T17:45:23.123456"
}
```

#### Get Chat History
```http
GET /chatbot/chat/history?user_id=1

Response: 200 OK
[
  {
    "message": "What are the symptoms of diabetes?",
    "response": "Common symptoms include...",
    "timestamp": "2024-11-28T17:45:23.123456"
  }
]
```

### Interactive API Documentation

FastAPI provides automatic interactive API documentation:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 📖 Usage

### Getting Started

1. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`

2. **Create an Account**
   - Click "Sign Up" on the landing page
   - Fill in your details (name, email, password)
   - Agree to terms and conditions
   - Submit the form

3. **Login**
   - Use your registered email and password
   - Click "Login"

4. **Start Chatting**
   - You'll be redirected to the chat interface
   - Type your medical question in the input field
   - The AI will analyze your query and provide recommendations
   - All conversations are saved for future reference

### Example Interactions

**User**: "I have a persistent headache and feel dizzy. What should I do?"

**AI Response**: The chatbot will analyze your symptoms and provide:
- Possible causes
- Self-care recommendations
- When to seek medical attention
- General health advice

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
   ```bash
   git clone https://github.com/Ayodeji90/AI-Medical-Chatbot-Dashboard.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues

## 🔮 Future Improvements

### Planned Features

1. **Enhanced Authentication**
   - Implement proper JWT token generation and validation
   - Add password reset functionality
   - Enable OAuth2 social login (Google, Facebook)

2. **Advanced Health Monitoring**
   - Integration with wearable devices (Fitbit, Apple Watch)
   - Real-time health metrics tracking
   - Personalized health dashboards
   - Health trend analysis and visualization

3. **Improved AI Capabilities**
   - Multi-language support for global accessibility
   - Voice-based interaction using speech recognition
   - Image analysis for skin conditions or medical reports
   - Integration with multiple medical AI models

4. **Healthcare Provider Features**
   - Appointment scheduling system
   - Telemedicine integration
   - Health professional dashboard for patient monitoring
   - Prescription management

5. **Data & Analytics**
   - Export health data in standard formats (PDF, CSV)
   - Health insights and recommendations based on history
   - Integration with Electronic Health Records (EHR)

6. **Mobile Application**
   - Native iOS and Android apps
   - Push notifications for health reminders
   - Offline mode support

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ayodeji Solaja Olamide**

## 🙏 Acknowledgments

- **Microsoft** for the BioGPT model
- **Hugging Face** for model hosting and transformers library
- **FastAPI** team for the excellent web framework
- **React** team for the UI library

---

**⚠️ Medical Disclaimer**: This application is designed for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
