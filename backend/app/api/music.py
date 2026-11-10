"""F001: music discovery. No provider connected yet."""
from fastapi import APIRouter, HTTPException, Query

router = APIRouter(prefix="/music", tags=["music"])

@router.get("/search")
async def search_music(q: str = Query(min_length=1)) -> None:
    # Future: CatalogService.search(query=q)
    raise HTTPException(status_code=501, detail="Music search is not implemented yet")
