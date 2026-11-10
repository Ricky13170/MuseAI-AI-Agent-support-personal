# MusicMind — AI Music Agent (Scaffold v0.1)

A **minimal, intentionally unfinished** monorepo scaffold based on `docs/music_agent_requirements.html`.

- **Backend:** Python 3.11+, FastAPI, Pydantic. Future orchestration: **one** LangGraph Agent.
- **Frontend:** React + TypeScript (TSX), JavaScript (Vite configuration), Vite.
- **Future local data:** SQLite first, PostgreSQL only if needed.
- **Music source:** adapter interface only; no provider is connected, no audio is extracted.
- **Evaluation:** placeholders for offline datasets, baselines and reproducible metrics.

## What actually works right now?

| Area | Status |
| --- | --- |
| FastAPI app, `GET /api/health`, API docs | Working |
| React/Vite page shell and feature folders | Working after installing npm dependencies |
| Search, chat, playlist CRUD, preference API | Deliberately returns **HTTP 501 Not Implemented** |
| LangGraph graph, tools, recommendation ranking | Class/type skeletons only |
| Music provider, streaming, authentication, database | **Not implemented** |
| Player / queue | Frontend placeholders only (no playback) |

Nothing in this scaffold claims a real track is available or an Agent action succeeded.

## Start backend

```bash
cd backend
python -m venv .venv
# Windows PowerShell: .\.venv\Scripts\Activate.ps1
# macOS/Linux: source .venv/bin/activate
python -m pip install -e ".[dev]"
python -m uvicorn app.main:app --reload
```

Open: `http://localhost:8000/api/health` or `http://localhost:8000/docs`.

## Start frontend (another terminal)

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. Vite proxies `/api` to `http://localhost:8000`.

## Tests

```bash
cd backend
python -m pytest -q
```

## Where to implement each requirement

| Feature | Main folders |
| --- | --- |
| F001 Discovery & catalog | `backend/app/providers`, `services/catalog.py`, `api/music.py`, `frontend/src/features/search` |
| F002 Player & queue | `frontend/src/features/player`, `features/queue` |
| F003 Preferences & feedback | `backend/app/domain/preferences.py`, `services/preferences.py`, `api/preferences.py`, `frontend/src/features/preferences` |
| F004 Single-Agent orchestration | `backend/app/agent/graph.py`, `state.py`, `tools` |
| F005 Recommendation & ranking | `backend/app/services/recommendations.py` |
| F006 Playlists & approval | `backend/app/domain/playlist.py`, `services/playlists.py`, `api/playlists.py`, `frontend/src/features/playlists` |
| F007 Eval & tracing | `evals`, `backend/tests` |
| F008 Provider safety & privacy | `backend/app/providers`, `backend/app/config.py` |

### Important design boundaries

1. **One Agent**, not one Agent per feature. Search, recommendation, and playlists become tools/services.
2. Never fabricate tracks; IDs/metadata must come from permitted provider results.
3. Keep **playback in the frontend** using an authorized provider player; the Agent only proposes playback actions.
4. Agent changes to persistent playlists must be **previewed and explicitly confirmed** before commits.
5. `InnerTube` is only an **disabled-by-default experimental stub**, not a real integration.
6. `docs/music_agent_requirements.html` is included as the requirements source.

**Suggested next coding step:** implement `MockMusicProvider` with your own small *non-audio* fixture, then wire `CatalogService` and `/api/music/search`. Do not start with auth, Redis, a vector database, or multiple Agents.
