from fastapi import FastAPI
from app.routers import auth
from app.database.postgresql import Base, engine
from app.routers import chatbot
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(debug=True)


# Create database tables
Base.metadata.create_all(bind=engine)


# Add CORS middleware to allow your frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL if different
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)
# Add a root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Medical Chatbot API!"}

# Include the authentication router
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])


# Include chatbot router
app.include_router(chatbot.router, prefix="/chatbot", tags=["Chat"])
