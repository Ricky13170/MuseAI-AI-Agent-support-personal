import { useEffect, useRef, useState } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { useStored } from '../hooks/useStored'
import { getHealth, sendAgentMessage } from '../lib/api'
import type { Message, PlaylistLocal, PreferencesLocal, View } from '../types/ui'
import { Home } from '../features/home/HomePage'
import { Rail } from '../features/chat/AssistantRail'
import { Discover } from '../features/search/SearchPanel'
import { Assistant } from '../features/chat/ChatPanel'
import { Library } from '../features/playlists/PlaylistPanel'
import { Preferences } from '../features/preferences/PreferencesPanel'
import { Player } from '../features/player/PlayerPanel'
import { Queue } from '../features/queue/QueuePanel'

const uid = () => typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random())
const defaultPreferences: PreferencesLocal = { genres: [], moods: [], artists: [] }
export function App(){
 const [view,setView]=useState<View>('home')
 const [theme,setTheme]=useStored<'dark'|'light'>('musicmind.theme.v1','dark')
 const [playlists,setPlaylists]=useStored<PlaylistLocal[]>('musicmind.playlists.v1',[])
 const [prefs,setPrefs]=useStored<PreferencesLocal>('musicmind.preferences.v1',defaultPreferences)
 const [api,setApi]=useState<'checking'|'online'|'offline'>('checking')
 const [mobileMenu,setMobileMenu]=useState(false)
 const [queue,setQueue]=useState(false)
 const [searchQuery,setSearchQuery]=useState('')
 const [draft,setDraft]=useState('')
 const [messages,setMessages]=useState<Message[]>([])
 const [chatBusy,setChatBusy]=useState(false)
 const [createTrigger,setCreateTrigger]=useState(0)
 const session=useRef(uid())
 const requestId=useRef(0)
 useEffect(()=>{document.documentElement.setAttribute('data-theme',theme)},[theme])
 useEffect(()=>{getHealth().then(()=>setApi('online')).catch(()=>setApi('offline'))},[])
 const navigate=(v:View)=>{setView(v);setMobileMenu(false);window.scrollTo({top:0,behavior:'smooth'})}
 const discover=(q='')=>{setSearchQuery(q);navigate('discover')}
 const ask=(q='')=>{if(q)setDraft(q);navigate('assistant')}
 const create=()=>{setCreateTrigger(x=>x+1);navigate('library')}
 const addPlaylist=(name:string)=>setPlaylists(p=>[{id:uid(),name,tracks:[],updatedAt:new Date().toISOString()},...p])
 const renamePlaylist=(id:string,name:string)=>setPlaylists(p=>p.map(x=>x.id===id?{...x,name,updatedAt:new Date().toISOString()}:x))
 const deletePlaylist=(id:string)=>setPlaylists(p=>p.filter(x=>x.id!==id))
 const clear=()=>{setPlaylists([]);setPrefs(defaultPreferences)}
 async function send(){const text=draft.trim();if(!text||chatBusy)return;const id=++requestId.current;setMessages(p=>[...p,{id:uid(),role:'user',text}]);setDraft('');setChatBusy(true);try{const result=await sendAgentMessage(text,session.current);const r=typeof result==='object'&&result!==null?result as Record<string,unknown>:{};const reply=[r.message,r.reply,r.response].find(s=>typeof s==='string');if(typeof reply!=='string')throw new Error('Unexpected Agent response.');if(id===requestId.current)setMessages(p=>[...p,{id:uid(),role:'assistant',text:reply}])}catch(e){if(id===requestId.current)setMessages(p=>[...p,{id:uid(),role:'assistant',text:`${e instanceof Error?e.message:'Agent unavailable.'} The AI Agent is not connected yet; your request was not processed.`,error:true}])}finally{if(id===requestId.current)setChatBusy(false)}}
 const resetChat=()=>{requestId.current+=1;session.current=uid();setMessages([]);setDraft('');setChatBusy(false)}
 const links:{name:string;icon:IconName;id:View}[]=[{name:'Home',icon:'home',id:'home'},{name:'Discover',icon:'search',id:'discover'},{name:'AI Assistant',icon:'sparkles',id:'assistant'},{name:'Your Library',icon:'library',id:'library'},{name:'Preferences',icon:'sliders',id:'preferences'}]
 const label:{[K in View]:string}={home:'Home',discover:'Discover',assistant:'AI Assistant',library:'Your Library',preferences:'Preferences'}
 return <div className="app-shell">{mobileMenu&&<button className="mobile-scrim" onClick={()=>setMobileMenu(false)} aria-label="Close navigation"/>}<aside className={`sidebar ${mobileMenu?'open':''}`}><div className="brand-row"><button className="brand" onClick={()=>navigate('home')}><img className="brand-icon-image" src="/muse-icon.png" alt=""/><img className="brand-wordmark-image" src="/muse-wordmark.png" alt="muse. — Your AI Music Space"/></button><button className="icon-btn mobile-close" onClick={()=>setMobileMenu(false)} aria-label="Close menu"><Icon name="x"/></button></div><nav aria-label="Main navigation"><div className="nav-title">MENU</div>{links.slice(0,3).map(x=><button key={x.id} className={`nav-item ${view===x.id?'active':''}`} onClick={()=>navigate(x.id)} aria-current={view===x.id?'page':undefined}><Icon name={x.icon} size={20}/>{x.name}{x.id==='assistant'&&<small className="ai-pill">AI</small>}</button>)}<div className="nav-title extra">YOUR MUSIC</div>{links.slice(3).map(x=><button key={x.id} className={`nav-item ${view===x.id?'active':''}`} onClick={()=>navigate(x.id)} aria-current={view===x.id?'page':undefined}><Icon name={x.icon} size={20}/>{x.name}{x.id==='library'&&playlists.length>0&&<small className="num-pill">{playlists.length}</small>}</button>)}</nav><div className="side-spacer"/><div className="side-promo"><span className="side-promo-icon"><Icon name="sparkles" size={21}/></span><strong>Meet your music copilot.</strong><p>Tell Muse what you're in the mood for.</p><button onClick={()=>ask()}>Open assistant <Icon name="arrow-up-right" size={16}/></button></div><div className="side-status"><span className={`status-dot ${api==='online'?'green':'amber'}`}/>{api==='online'?'API online · features in progress':api==='checking'?'Checking backend...':'Frontend preview mode'}</div></aside>
  <div className="workspace"><header className="topbar"><div className="topbar-location"><button className="icon-btn menu-btn" onClick={()=>setMobileMenu(true)} aria-label="Open navigation"><Icon name="menu" size={21}/></button><span>Muse</span><Icon name="chevron-right" size={14}/><strong>{label[view]}</strong></div><div className="topbar-actions"><form className="top-search" onSubmit={e=>{e.preventDefault();const input=e.currentTarget.elements.namedItem('top-query') as HTMLInputElement;if(input.value.trim()){discover(input.value.trim());input.value=''}}}><Icon name="search" size={18}/><input name="top-query" aria-label="Quick music search" placeholder="Search music, artists..."/><span>↵</span></form><span className="top-status"><i className={`status-dot ${api==='online'?'green':'amber'}`}/>{api==='online'?'API online':'Preview'}</span><button className="icon-btn" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`}><Icon name={theme==='dark'?'sun':'moon'} size={21}/></button><div className="avatar" title="Guest mode">M</div></div></header>
  <div className={`workspace-body ${view==='home'||view==='discover'?'with-rail':''}`}><main className="main-pane">{view==='home'&&<Home playlists={playlists} onDiscover={discover} onAsk={ask} onLibrary={()=>navigate('library')} onCreate={create}/ >}{view==='discover'&&<Discover key={searchQuery} query={searchQuery}/ >}{view==='assistant'&&<Assistant messages={messages} draft={draft} setDraft={setDraft} busy={chatBusy} send={()=>void send()} onReset={resetChat}/ >}{view==='library'&&<Library playlists={playlists} trigger={createTrigger} onConsumeTrigger={()=>setCreateTrigger(0)} onCreate={addPlaylist} onRename={renamePlaylist} onDelete={deletePlaylist} onAsk={ask}/ >}{view==='preferences'&&<Preferences prefs={prefs} onSave={setPrefs} onClear={clear}/ >}</main>{(view==='home'||view==='discover')&&<Rail onAsk={ask}/>}</div>
  <nav className="mobile-tabs" aria-label="Mobile navigation">{links.slice(0,4).map(x=><button key={x.id} className={view===x.id?'active':''} onClick={()=>navigate(x.id)}><Icon name={x.icon} size={21}/>{x.id==='assistant'?'AI':x.name.replace('Your ','')}</button>)}</nav></div><Player onQueue={()=>setQueue(true)}/>{queue&&<Queue onClose={()=>setQueue(false)}/>}</div>
}

