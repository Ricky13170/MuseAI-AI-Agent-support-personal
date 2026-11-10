# Suggested implementation order (from the provided requirements)

0. **Feasibility:** decide a permitted catalog + playback provider; prepare an offline fixture. (`F008`)
1. **Music basics:** implement mock/authorized provider, `CatalogService`, search API; then player and queue (`F001`, `F002`).
2. **Local playlists:** SQLite models and ordinary playlist CRUD (`F006`, manual first).
3. **Agent core:** one LangGraph graph, structured tool calls, session state, clarification, approval (`F004`, `F006`).
4. **Personalization:** explicit preferences, feedback, recommendation candidate retrieval/ranking (`F003`, `F005`).
5. **Evaluation:** 50+ cases, tool selection, final-state verification, traces, baselines (`F007`).
6. **Optional:** embeddings, MCP, OAuth integrations after evidence that they help.

At each step, keep endpoints truthful: an unavailable capability should not look successful.
