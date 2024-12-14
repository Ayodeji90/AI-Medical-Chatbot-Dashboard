from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database.postgresql import get_db
from app.models.health_data import PatientHealthData

router = APIRouter()

# Request and response models
class HealthDataRequest(BaseModel):
    patient_id: int
    bmi_category: str
    bp_systolic: float | None
    bp_diastolic: float | None
    heart_rate: float | None
    habit_category: str | None
    date: str  # YYYY-MM-DD format

class HealthDataResponse(BaseModel):
    id: int
    patient_id: int
    bmi_category: str
    bp_systolic: float | None
    bp_diastolic: float | None
    heart_rate: float | None
    habit_category: str | None
    date: str
    created_at: str
    updated_at: str

@router.post("/health", response_model=HealthDataResponse)
def create_health_data(request: HealthDataRequest, db: Session = Depends(get_db)):
    new_health_data = PatientHealthData(**request.dict())
    db.add(new_health_data)
    db.commit()
    db.refresh(new_health_data)
    return new_health_data

@router.get("/health/{patient_id}", response_model=list[HealthDataResponse])
def get_health_data(patient_id: int, page: int = 1, page_size: int = 10, db: Session = Depends(get_db)):
    if page < 1 or page_size < 1:
        raise HTTPException(status_code=400, detail="Page and page size must be positive integers.")
    total_records = db.query(PatientHealthData).filter(PatientHealthData.patient_id == patient_id).count()
    records = (
        db.query(PatientHealthData)
        .filter(PatientHealthData.patient_id == patient_id)
        .offset((page - 1) * page_size)
        .limit(page_size)
        .all()
    )
    return {
        "data": records,
        "page": page,
        "page_size": page_size,
        "total_records": total_records,
        "total_pages": (total_records + page_size - 1) // page_size,  # Round up
    }


@router.put("/health/{id}", response_model=HealthDataResponse)
def update_health_data(id: int, request: HealthDataRequest, db: Session = Depends(get_db)):
    health_data = db.query(PatientHealthData).filter(PatientHealthData.id == id).first()
    if not health_data:
        raise HTTPException(status_code=404, detail="Health record not found.")
    for key, value in request.dict().items():
        setattr(health_data, key, value)
    db.commit()
    db.refresh(health_data)
    return health_data

@router.delete("/health/{id}")
def delete_health_data(id: int, db: Session = Depends(get_db)):
    health_data = db.query(PatientHealthData).filter(PatientHealthData.id == id).first()
    if not health_data:
        raise HTTPException(status_code=404, detail="Health record not found.")
    db.delete(health_data)
    db.commit()
    return {"message": f"Health record with ID {id} has been deleted."}
