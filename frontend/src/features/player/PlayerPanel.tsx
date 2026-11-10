import { FeatureCard } from '../../components/FeatureCard'

export function PlayerPanel() {
  return (
    <FeatureCard feature="F002 · Playback" title="Now playing">
      <div className="player-placeholder">No track selected</div>
      <p className="subtle">An authorized provider player will be embedded here.</p>
      <button disabled>Play / Pause</button>
    </FeatureCard>
  )
}
