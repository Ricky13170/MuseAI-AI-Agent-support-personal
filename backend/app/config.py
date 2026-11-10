"""Future configuration hook; no secrets are loaded by default."""
from dataclasses import dataclass
import os

@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("APP_NAME", "MusicMind")
    music_provider: str = os.getenv("MUSIC_PROVIDER", "mock")
    enable_experimental_innertube: bool = (
        os.getenv("ENABLE_EXPERIMENTAL_INNERTUBE", "false").lower() == "true"
    )

settings = Settings()
