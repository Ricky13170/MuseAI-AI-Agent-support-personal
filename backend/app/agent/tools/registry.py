"""Tools expose services to the Agent. Do not make tools separate Agents."""
from typing import Any
from app.services.catalog import CatalogService
from app.services.playlists import PlaylistService

class MusicToolRegistry:
    def __init__(self, catalog: CatalogService, playlists: PlaylistService):
        self.catalog = catalog
        self.playlists = playlists

    def build_tools(self) -> list[Any]:
        # TODO: return structured, allowlisted LangChain tools.
        raise NotImplementedError
