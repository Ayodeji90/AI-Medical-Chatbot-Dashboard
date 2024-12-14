from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session
from app.models.user import User
from app.utils.hashing import hash_password, verify_password
from app.database.postgresql import get_db

router = APIRouter()

# Pydantic schemas
class SignupRequest(BaseModel):
    name: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    password: str = Field(..., min_length=6)
    terms_agreed: bool

class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6)

@router.post("/signup", status_code=201)
def signup(user_data: SignupRequest, db: Session = Depends(get_db)):
    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Validate terms agreement
    if not user_data.terms_agreed:
        raise HTTPException(status_code=400, detail="Terms and Privacy must be agreed")

    # Create and store the new user
    new_user = User(
        name=user_data.name,
        email=user_data.email,
        hashed_password=hash_password(user_data.password),
        terms_agreed=user_data.terms_agreed,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created successfully", "user_id": new_user.id}

@router.post("/login", status_code=200)
def login(credentials: LoginRequest, db: Session = Depends(get_db)):
    # Fetch user by email
    user = db.query(User).filter(User.email == credentials.email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Verify password
    if not verify_password(credentials.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Mock token generation (replace with real token logic, e.g., JWT)
    token = f"mock-token-for-user-{user.id}"

    return {"message": "Login successful", "token": token, "user_id": user.id}
