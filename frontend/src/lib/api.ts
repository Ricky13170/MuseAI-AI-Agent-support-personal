/** Minimal typed bridge; feature API clients are not implemented. */
export type HealthResponse = {
  status: string
  app: string
  stage: string
}

export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch('/api/health')
  if (!response.ok) throw new Error('Backend unavailable')
  return (await response.json()) as HealthResponse
}
