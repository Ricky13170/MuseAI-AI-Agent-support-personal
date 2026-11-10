import { FeatureCard } from '../../components/FeatureCard'

export function ChatPanel() {
  return (
    <FeatureCard feature="F004 · One Agent" title="Chat with MusicMind" className="chat-card">
      <p>Eventually: Vietnamese/English music requests, tool use and confirmations.</p>
      <div className="chat-empty">Your Agent conversation will appear here.</div>
      <div className="input-row">
        <input aria-label="Chat message (not implemented)" placeholder="Suggest calm music for studying..." disabled />
        <button disabled>Send</button>
      </div>
      <p className="subtle">LangGraph and LLM integration have not been implemented.</p>
    </FeatureCard>
  )
}
