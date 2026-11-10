# MusicMind Frontend — UI v0.2

A responsive music-web-app interface built with **React 19, TypeScript, JavaScript and Vite**. This is the frontend-first implementation of `docs/music_agent_requirements.html`.

## Run locally

Requires Node.js 20+ and npm.

```powershell
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**. The UI renders even when the Python backend is not running; the status pill reports preview/offline mode. To try the API calls, run the FastAPI backend on port 8000 from a separate terminal.

```powershell
# optional production build check
npm run build
```

## What's included

| Area | UI behavior | Real backend? |
| --- | --- | --- |
| Home | Hero, browse-by-mood shortcuts, library preview, quick actions | Not required |
| Discover | Input validation and API request to `/api/music/search`; error/loading/empty states | **Not implemented (501)** |
| AI Assistant | Chat composer, prompt starters, session state, request to `/api/agent/chat`, accurate error response | **Not implemented (501)** |
| Playlists | Create, rename, browse and delete with confirmation, saved in localStorage | Browser only |
| Preferences | Pick genres/moods, add favorite artists, save or clear local data | Browser only |
| Player & Queue | Persistent player bar and queue drawer with empty states | No music playback yet |
| Layout | Sidebar navigation, mobile tab bar, dark/light theme and responsive components | Not required |

No fake tracks, audio URLs, recommendation results, provider logins or successful Agent actions are simulated. Playlist and preference data are **browser-local**, not server synchronized; do not rely on browser storage for real user accounts.

## Source organization

```text
src/
  app/
    App.tsx             # shared navigation and UI state
    styles.css          # responsive design tokens and styles
  components/
    Icon.tsx            # SVG icon primitives
    Modal.tsx           # confirmation/name dialogs
  features/
    home/HomePage.tsx
    search/SearchPanel.tsx
    chat/{AssistantRail,ChatPanel}.tsx
    playlists/PlaylistPanel.tsx
    preferences/PreferencesPanel.tsx
    player/PlayerPanel.tsx
    queue/QueuePanel.tsx
  hooks/useStored.ts     # browser storage for prototype-only data
  lib/api.ts             # typed fetch utility (no fabricated responses)
  types/{music,ui}.ts
```

## Next implementation steps

1. Implement F001 provider search on the backend returning verified catalog tracks; define a typed response in `types/music.ts` and render search results in `SearchPanel.tsx`.
2. Implement provider-authorized playback inside `PlayerPanel.tsx`, separating real player state from Agent messages.
3. Replace browser-local playlist/preference persistence with API clients and backend storage when endpoints are available. Preserve explicit preview/confirmation for Agent-initiated mutations.
4. Connect a single LangGraph Agent to `/api/agent/chat` and evaluate it using curated tool-call and playlist-edit cases.

The design uses only existing React/Vite dependencies and local CSS/SVG assets; it does not require a UI framework, an icon package or a music provider credential just to render.
