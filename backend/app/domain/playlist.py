"""Playlist contracts. Drafts are not committed without approval."""
from pydantic import BaseModel, Field
from app.domain.track import TrackRef

class Playlist(BaseModel):
    id: str
    name: str
    tracks: list[TrackRef] = Field(default_factory=list)

class PlaylistDraft(BaseModel):
    """Proposed changes only; not persisted or approved."""
    draft_id: str
    playlist_id: str | None = None
    proposed_name: str
    tracks: list[TrackRef] = Field(default_factory=list)

class PlaylistApproval(BaseModel):
    draft_id: str
    approved: bool = False
