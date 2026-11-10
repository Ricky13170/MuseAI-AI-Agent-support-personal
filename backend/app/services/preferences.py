"""F003: explicit preferences; opt-in listening history only."""
from app.domain.preferences import PreferenceProfile

class PreferenceService:
    def get(self, session_id: str) -> PreferenceProfile | None:
        raise NotImplementedError

    def save(self, session_id: str, profile: PreferenceProfile) -> None:
        raise NotImplementedError
