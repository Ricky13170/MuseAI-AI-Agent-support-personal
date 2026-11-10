"""Provider-independent music catalog contracts."""
from pydantic import BaseModel, Field

class TrackRef(BaseModel):
    provider: str = Field(min_length=1)
    track_id: str = Field(min_length=1)

class Track(BaseModel):
    ref: TrackRef
    title: str
    artists: list[str] = Field(default_factory=list)
    thumbnail_url: str | None = None
    source_url: str | None = None
    duration_seconds: int | None = Field(default=None, ge=0)
    playback_available: bool = False
    playback_ref: str | None = None
