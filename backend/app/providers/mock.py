"""Offline provider contract. Add explicit fixture data in Phase 0/1."""
from app.domain.track import Track, TrackRef
from app.providers.base import MusicProvider

class MockMusicProvider(MusicProvider):
    async def search(self, query: str, limit: int = 10) -> list[Track]:
        raise NotImplementedError("Add non-audio catalog fixtures before using mock search")

    async def get_track(self, ref: TrackRef) -> Track | None:
        raise NotImplementedError("Add non-audio catalog fixtures before using mock lookup")
