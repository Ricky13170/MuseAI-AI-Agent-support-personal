import { FeatureCard } from '../../components/FeatureCard'

export function QueuePanel() {
  return (
    <FeatureCard feature="F002 · Queue" title="Up next">
      <p className="subtle">No queue items. Reordering and playback come later.</p>
    </FeatureCard>
  )
}
