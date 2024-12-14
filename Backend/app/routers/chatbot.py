from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database.postgresql import get_db
from app.models.chat import Chat
from app.services.chatbot import generate_response


router = APIRouter()

# Request and response models
class ChatRequest(BaseModel):
    user_id: int
    message: str

class ChatResponse(BaseModel):
    message: str
    response: str
    timestamp: str

@router.post("/chat", response_model=ChatResponse)
def handle_chat(request: ChatRequest, db: Session = Depends(get_db)):
    response = generate_response(request.message)
    chat = Chat(user_id=request.user_id, message=request.message, response=response)
    db.add(chat)
    db.commit()
    db.refresh(chat)
    return {
        "message": request.message,
        "response": response,
        "timestamp": chat.timestamp.isoformat(),
    }

@router.get("/chat/history")
def get_chat_history(user_id: int, db: Session = Depends(get_db)):
    history = db.query(Chat).filter(Chat.user_id == user_id).order_by(Chat.timestamp).all()
    return [
        {"message": c.message, "response": c.response, "timestamp": c.timestamp.isoformat()}
        for c in history
    ]
