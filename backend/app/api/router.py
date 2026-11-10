"""HTTP routes are thin; business logic will live in services and Agent tools."""
from fastapi import APIRouter
from app.api import health, music, agent, playlists, preferences

api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(music.router)
api_router.include_router(agent.router)
api_router.include_router(playlists.router)
api_router.include_router(preferences.router)
