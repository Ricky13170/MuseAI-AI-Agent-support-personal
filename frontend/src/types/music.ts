/** Mirrors the normalized backend domain contracts (no fake seed tracks). */
export interface TrackRef {
  provider: string
  track_id: string
}

export interface Track {
  ref: TrackRef
  title: string
  artists: string[]
  thumbnail_url?: string | null
  source_url?: string | null
  duration_seconds?: number | null
  playback_available: boolean
}

export interface Playlist {
  id: string
  name: string
  tracks: TrackRef[]
}
