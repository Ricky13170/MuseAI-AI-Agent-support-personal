"""EXPERIMENT ONLY. Disabled by default and never a production default."""
from app.domain.track import Track, TrackRef
from app.providers.base import MusicProvider

class ExperimentalInnerTubeProvider(MusicProvider):
    def __init__(self, *, enabled: bool = False):
        if not enabled:
            raise RuntimeError("Experimental InnerTube adapter is disabled")

    async def search(self, query: str, limit: int = 10) -> list[Track]:
        raise NotImplementedError("No InnerTube functionality is included")

    async def get_track(self, ref: TrackRef) -> Track | None:
        raise NotImplementedError("No InnerTube functionality is included")
