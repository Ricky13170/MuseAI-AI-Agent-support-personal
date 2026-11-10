"""Possible official provider adapter; NOT connected to an API."""
from app.domain.track import Track, TrackRef
from app.providers.base import MusicProvider

class YouTubeDataProvider(MusicProvider):
    def __init__(self, api_key: str):
        self.api_key = api_key  # Keep server-side; never serialize to UI or logs.

    async def search(self, query: str, limit: int = 10) -> list[Track]:
        raise NotImplementedError("Implement authorized YouTube Data API integration")

    async def get_track(self, ref: TrackRef) -> Track | None:
        raise NotImplementedError("Implement authorized provider metadata lookup")
