import { FeatureCard } from '../../components/FeatureCard'

export function PlaylistPanel() {
  return (
    <FeatureCard feature="F006 · Library" title="Your playlists">
      <p className="subtle">No playlists yet. Agent edits will require preview and approval.</p>
      <button disabled>Create playlist</button>
    </FeatureCard>
  )
}
