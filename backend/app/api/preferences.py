"""F003: listener preference API; storage/consent not implemented."""
from fastapi import APIRouter, HTTPException
from app.domain.preferences import PreferenceProfile

router = APIRouter(prefix="/preferences", tags=["preferences"])

@router.get("")
async def get_preferences() -> None:
    raise HTTPException(status_code=501, detail="Preferences are not implemented yet")

@router.put("")
async def update_preferences(profile: PreferenceProfile) -> None:
    raise HTTPException(status_code=501, detail="Preferences are not implemented yet")
