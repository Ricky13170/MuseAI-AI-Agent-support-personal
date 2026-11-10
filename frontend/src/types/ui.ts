export type View = 'home'|'discover'|'assistant'|'library'|'preferences'
export interface PlaylistLocal {id:string; name:string; tracks:string[]; updatedAt:string}
export interface PreferencesLocal {genres:string[]; moods:string[]; artists:string[]}
export interface Message {id:string;role:'user'|'assistant';text:string;error?:boolean}
