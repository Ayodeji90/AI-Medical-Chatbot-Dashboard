from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_profile():
    return {"message": "User profile route is working"}
