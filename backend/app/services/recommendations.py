"""F005: retrieval + deterministic ranking. No ranking model yet."""
from app.domain.track import Track
from app.domain.preferences import PreferenceProfile

class RecommendationService:
    def rank(self, candidates: list[Track], profile: PreferenceProfile) -> list[Track]:
        # TODO: exclusions, dedupe, preference scoring, diversity, trace.
        raise NotImplementedError
