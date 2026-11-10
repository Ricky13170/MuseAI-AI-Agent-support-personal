"""F001: search and provider normalization boundary."""
from app.domain.track import Track
from app.providers.base import MusicProvider

class CatalogService:
    def __init__(self, provider: MusicProvider):
        self.provider = provider

    async def search(self, query: str) -> list[Track]:
        # TODO: validate, call provider, normalize errors and track IDs.
        raise NotImplementedError
