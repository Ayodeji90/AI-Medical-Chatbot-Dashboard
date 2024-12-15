# AI-Medical-Chatbot

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Roadmap](#roadmap)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [AI Model](#ai-model)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)
- [Conclusion](#conclusion)

## Introduction

AI-Medical-Chatbot is an AI-powered medical chatbot designed to assist users in receiving personalized healthcare insights. By collecting basic health data such as blood pressure (BP), blood type, and genotype, the chatbot analyzes this information using BioGPT, a specialized Large Language Model (LLM). The chatbot provides users with recommendations, helping them understand their health status and whether medical attention is required, while storing their data for future monitoring.

## Features

- **Secure User Authentication**: Users can sign up or log in with secure authentication, ensuring data privacy and user-specific access.
- **Health Data Collection**: Users input health metrics such as BP, blood type, genotype, etc., which are essential for AI analysis.
- **AI-Driven Diagnosis**: The chatbot processes the user’s data and uses AI models to predict potential health concerns or suggest self-care options.
- **Real-Time Medical Recommendations**: Immediate recommendations based on user inputs, whether medical attention is required or self-treatment is adequate.
- **Data Storage and History**: Users’ health data is stored securely in a database for future reference, enabling consistent health monitoring.
- **User-Friendly Interface**: A simple, responsive interface guiding users through their health assessment and displaying tailored recommendations.

## System Architecture

The architecture of AI-Medical-Chatbot is divided into three major components:
1. **Frontend**: A responsive user interface built with React for data input, user interaction, and displaying AI recommendations.
2. **Backend**: Python with FastAPI for creating the API endpoints, managing the flow of data between the user and the AI model.
3. **AI Model**: BioGPT, a Large Language Model, which processes the user’s health data to provide predictions and recommendations.

Below is a high-level system flow:

1. **Landing Page**: Users land on the homepage, with options to either sign up or log in.
2. **Authentication**: Upon successful login, users are authenticated using JSON Web Tokens (JWT) for secure session handling.
3. **Health Data Input**: Users input essential health information which is sent to the backend.
4. **AI Processing**: The backend communicates with the AI model, which processes the user’s health data and generates a personalized health prediction.
5. **Recommendation Page**: The AI prediction is sent back to the user, with recommendations for medical care or self-treatment.

## Roadmap

1. **Landing Page**: Simple interface allowing users to sign up or log in.
2. **Sign Up/Login**: New users can register, while existing users log in. After authentication, users are directed to the dashboard.
3. **Dashboard**: The user inputs basic health data such as blood pressure (BP), blood type, and genotype.
4. **AI Prediction**: The backend processes user inputs, and the BioGPT AI model predicts whether medical attention is required or self-care is sufficient.
5. **Recommendation Display**: The AI output is displayed on a new page, outlining potential health risks and recommended actions.
6. **Data Storage**: User data is securely stored in PostgreSQL database system for future reference, allowing users to track their health history over time.

## Technologies Used

### Frontend:
- **React**: Used for creating a responsive and dynamic user interface.
- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For adding interactivity on the client-side.

### Backend:
- **Python**: Used for backend logic and API handling.
- **FastAPI**: Framework for creating API endpoints.
- **PostgreSQL**: A database used for storing user data and health information.

### AI Model:
- **BioGPT**: A specialized Large Language Model (LLM) used for predicting and generating medical insights based on user data.
- 

### Other Tools:
- **JWT (JSON Web Tokens)**: Used for secure authentication and authorization.

## Installation

### Prerequisites

Before setting up the project, ensure that the following are installed on your local machine:

- **Python 3.12** (for AI model training)
- **PostgreSQL**: For managing the relational database.

### Steps to Install

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ai-medical-chatbot.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd ai-medical-chatbot
   ```

3. **Install Backend Dependencies**
   ```bash
   npm install
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

5. **Set Up Environment Variables**
   Create a `.env` file in the root of the project to configure the following:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   AI_MODEL_PATH=path_to_your_ai_model
   ```

6. **Run the Backend Server**
   ```bash
   npm run dev
   ```

7. **Run the Frontend**
   ```bash
   cd client
   npm start
   ```

The app will be running locally at `http://localhost:3000`.

## Usage

1. Navigate to the homepage and either sign up or log in.
2. Once logged in, input your health data (e.g., BP, blood type, etc.).
3. The AI will process your data and present a recommendation on the next page.
4. Your health data will be stored for future use, and you can track your health progress over time.

## AI Model

The AI-Medical-Chatbot uses **BioGPT**, a specialized Large Language Model (LLM) for healthcare applications. BioGPT processes the user's health metrics and generates medical insights, predicting the likelihood of requiring medical intervention.

**Model Overview:**

- **Training Data**: Medical datasets with various health metrics.
- **Algorithm**: BioGPT LLM, designed for natural language processing in medical contexts.
- **Accuracy**: The model has been tuned for high-accuracy recommendations based on real-world health data.

## Contributing

We welcome contributions from developers and data scientists. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a pull request explaining your changes.

## Future Improvements

There are several areas in which AI-Medical-Chatbot can be expanded and improved:

1. **Integration with Wearable Devices**: Enable real-time data collection from wearables, such as smartwatches, to provide continuous health monitoring.
2. **Voice-Based Interaction**: Implement voice recognition for more accessible health data input and chatbot interaction.
3. **Multi-Language Support**: Expand the chatbot’s usability by supporting multiple languages to cater to a wider user base.
4. **Appointment Scheduling**: Users will be able to schedule appointments with medical professionals such as doctors or physicians.
5. **Health Monitoring**: Health institutions will have access to monitor patients' health records and track their health data over time.

## Conclusion

AI-Medical-Chatbot provides a scalable, efficient, and user-friendly solution for healthcare self-assessment and preliminary diagnostics. With its secure authentication system, AI-powered health recommendations, and data storage for future reference, the users will gain insights into their health status, and health institutions can monitor and track patients’ records efficiently. The project can significantly impact the healthcare industry, particularly in regions with limited access to medical facilities. While the chatbot is not a replacement for professional medical advice, it acts as a tool to assist healthcare providers by offering initial predictions and recommendations, leading to timely medical intervention when needed.

By expanding on future improvements such as wearable integration and advanced AI models, the AI-Medical-Chatbot can evolve into an essential tool for personal health management and early-stage medical diagnosis.
