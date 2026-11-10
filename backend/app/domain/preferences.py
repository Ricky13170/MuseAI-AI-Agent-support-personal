"""Explicit user preferences and feedback, not inferred sensitive data."""
from typing import Literal
from pydantic import BaseModel, Field
from app.domain.track import TrackRef

class TrackFeedback(BaseModel):
    track: TrackRef
    rating: Literal["like", "dislike"]

class PreferenceProfile(BaseModel):
    favorite_artists: list[str] = Field(default_factory=list)
    favorite_genres: list[str] = Field(default_factory=list)
    preferred_moods: list[str] = Field(default_factory=list)
    feedback: list[TrackFeedback] = Field(default_factory=list)
    remember_history: bool = False
