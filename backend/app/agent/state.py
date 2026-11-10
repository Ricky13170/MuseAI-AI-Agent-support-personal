"""F004: typed state for a SINGLE LangGraph Agent (future implementation)."""
from typing import Literal, TypedDict

Intent = Literal["search", "recommend", "playlist", "playback", "qa", "unknown"]

class PendingAction(TypedDict, total=False):
    action_type: str
    draft_id: str
    requires_confirmation: bool

class AgentState(TypedDict, total=False):
    session_id: str
    messages: list[dict[str, str]]
    intent: Intent
    selected_track_id: str | None
    selected_playlist_id: str | None
    pending_action: PendingAction | None
    tool_calls_used: int
    last_error: str | None
