"""F006: local playlist operations; no persistence is wired."""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

router = APIRouter(prefix="/playlists", tags=["playlists"])

class CreatePlaylistRequest(BaseModel):
    name: str = Field(min_length=1)

@router.get("")
async def list_playlists() -> None:
    raise HTTPException(status_code=501, detail="Playlist storage is not implemented yet")

@router.post("")
async def create_playlist(request: CreatePlaylistRequest) -> None:
    raise HTTPException(status_code=501, detail="Playlist creation is not implemented yet")
