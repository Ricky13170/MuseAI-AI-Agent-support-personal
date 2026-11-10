# Scaffold architecture (decision note)

**Goal:** keep AI engineering central and resist overbuilding infrastructure.

```text
React/TypeScript UI (search | chat | playlists | player)
      |  same-origin /api (Vite proxy in development)
      v
FastAPI routes  -->  services  -->  MusicProvider (mock / authorized adapter)
      |                 |
      |                 +--> local playlist/preferences storage (future)
      v
Single LangGraph Agent (future)
  state -> intent routing -> approved tools -> clarification/confirmation -> answer
                               |
                               +--> catalog, recommendations, playlist service

Offline evaluation -> datasets, baselines, metrics (separate from production APIs)
```

Player and queue live in the browser. The Agent can request a playback action, but the player must confirm its real state. No audio is served by the Python backend.

**Now:** health endpoint and static frontend only; all feature endpoints respond 501.

**Later:** implement persistence (SQLite first), permitted provider, approval lifecycle, trace/redaction, bounded tool calls. Avoid adding Celery, Redis, microservices, vector DB or auth before needed.
