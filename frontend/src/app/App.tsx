import { useEffect, useState } from 'react'
import { getHealth } from '../lib/api'
import { SearchPanel } from '../features/search/SearchPanel'
import { ChatPanel } from '../features/chat/ChatPanel'
import { PlayerPanel } from '../features/player/PlayerPanel'
import { QueuePanel } from '../features/queue/QueuePanel'
import { PlaylistPanel } from '../features/playlists/PlaylistPanel'
import { PreferencesPanel } from '../features/preferences/PreferencesPanel'

type ApiState = 'checking' | 'connected' | 'offline'

export function App() {
  const [apiState, setApiState] = useState<ApiState>('checking')

  useEffect(() => {
    getHealth().then(() => setApiState('connected')).catch(() => setApiState('offline'))
  }, [])

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-icon">♫</span><div>MusicMind<small>AI Music Agent</small></div></div>
        <p className="eyebrow side-label">Scaffold v0.1</p>
        <nav aria-label="Feature areas">
          <a href="#discovery">Discovery &amp; Chat</a>
          <a href="#library">Library &amp; Preferences</a>
          <a href="#playback">Player &amp; Queue</a>
        </nav>
        <p className="sidebar-note">UI-only placeholders. No songs, profiles or playlists are generated.</p>
      </aside>
      <main className="main-content">
        <header className="page-header">
          <div><span className="eyebrow">MusicMind / Project skeleton</span><h1>Listen your way.</h1><p>Direct search and a single AI Agent, built incrementally.</p></div>
          <span className="api-status" aria-live="polite">Backend: {apiState}</span>
        </header>
        <div id="discovery" className="main-grid">
          <SearchPanel />
          <ChatPanel />
        </div>
        <div id="library" className="bottom-grid">
          <PlaylistPanel />
          <PreferencesPanel />
        </div>
        <div id="playback" className="bottom-grid">
          <PlayerPanel />
          <QueuePanel />
        </div>
        <footer>Phase 0 · Structure only · No external music or LLM calls</footer>
      </main>
    </div>
  )
}
