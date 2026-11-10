"""F004: chat endpoint; the LangGraph workflow is intentionally absent."""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

router = APIRouter(prefix="/agent", tags=["agent"])

class ChatRequest(BaseModel):
    session_id: str | None = None
    message: str = Field(min_length=1)

@router.post("/chat")
async def chat(request: ChatRequest) -> None:
    # Future: use one compiled graph + session-scoped state.
    raise HTTPException(status_code=501, detail="Agent graph is not implemented yet")
