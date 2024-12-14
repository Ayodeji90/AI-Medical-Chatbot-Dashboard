from pydantic import BaseModel, EmailStr
from app.models.schemas import SignupRequest


class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str
