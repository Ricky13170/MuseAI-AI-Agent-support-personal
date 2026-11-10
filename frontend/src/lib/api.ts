export type HealthResponse = {status:string; app:string;stage:string}
async function handle<T>(res:Response):Promise<T> {
 if (!res.ok) { let message=`HTTP ${res.status}`; try { const data=await res.json() as {detail?:string}; message=data.detail??message } catch {/* ignore */} throw new Error(message) }
 return res.json() as Promise<T>
}
export async function getHealth():Promise<HealthResponse> {return handle<HealthResponse>(await fetch('/api/health'))}
export async function searchCatalog(query:string):Promise<unknown> {return handle<unknown>(await fetch('/api/music/search?q='+encodeURIComponent(query)))}
export async function sendAgentMessage(message:string,session_id:string):Promise<unknown> {return handle<unknown>(await fetch('/api/agent/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message,session_id})}))}
