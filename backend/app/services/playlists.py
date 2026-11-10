"""F006: playlist previews and confirmed, idempotent commits."""
from app.domain.playlist import Playlist, PlaylistApproval, PlaylistDraft

class PlaylistService:
    def propose(self, request: str) -> PlaylistDraft:
        # TODO: no writes at the proposal stage.
        raise NotImplementedError

    def commit(self, approval: PlaylistApproval) -> Playlist:
        # TODO: validate approval, authorization, draft ID and idempotency key.
        raise NotImplementedError
