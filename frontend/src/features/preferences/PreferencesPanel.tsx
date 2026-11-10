import { FeatureCard } from '../../components/FeatureCard'

export function PreferencesPanel() {
  return (
    <FeatureCard feature="F003 · Profile" title="Preferences">
      <p className="subtle">Favorite artists, genres, moods and explicit feedback will go here.</p>
      <button disabled>Set preferences</button>
    </FeatureCard>
  )
}
