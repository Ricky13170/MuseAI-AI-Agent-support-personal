"""F008: adapter boundary; LangGraph should not know individual providers."""
from abc import ABC, abstractmethod
from app.domain.track import Track, TrackRef

class MusicProvider(ABC):
    @abstractmethod
    async def search(self, query: str, limit: int = 10) -> list[Track]:
        """Return real normalized catalog results or a provider error."""

    @abstractmethod
    async def get_track(self, ref: TrackRef) -> Track | None:
        """Retrieve one track; never fabricate metadata."""
