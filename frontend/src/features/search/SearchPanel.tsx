import { FeatureCard } from '../../components/FeatureCard'

export function SearchPanel() {
  return (
    <FeatureCard feature="F001 · Discovery" title="Search music" className="search-card">
      <p>Search provider-backed tracks by title or artist (coming later).</p>
      <div className="input-row">
        <input aria-label="Search music (not implemented)" placeholder="Track, artist or keyword..." disabled />
        <button disabled>Search</button>
      </div>
      <p className="subtle">No catalog is connected. Results are not simulated.</p>
    </FeatureCard>
  )
}
