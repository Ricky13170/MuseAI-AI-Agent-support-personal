import { Icon, type IconName } from '../../components/Icon'
import type { PlaylistLocal } from '../../types/ui'

const vibes: {name:string; tagline:string; query:string; icon:IconName; color:string}[] = [
 {name:'Deep focus',tagline:'Get in the zone',query:'focus music for studying',icon:'wind',color:'blue'},
 {name:'Slow mornings',tagline:'Take it easy',query:'relaxing morning acoustic songs',icon:'coffee',color:'pink'},
 {name:'Feel good',tagline:'A little pick-me-up',query:'happy upbeat songs',icon:'sun',color:'green'},
 {name:'After dark',tagline:'Unwind and reset',query:'late night chill music',icon:'moon',color:'violet'},
]

export function Home({playlists,onDiscover,onAsk,onLibrary,onCreate}:{playlists:PlaylistLocal[];onDiscover:(q?:string)=>void;onAsk:(q?:string)=>void;onLibrary:()=>void;onCreate:()=>void}){
 return <div className="home-page">
  <div className="page-head"><div className="eyebrow accent">GOOD TO HAVE YOU HERE</div><h1>Music for <span>every version of you.</span></h1><p>Discover something new, get in the flow, or let AI find your next favorite.</p></div>
  <section className="hero"><div className="hero-copy"><div className="hero-eyebrow"><Icon name="sparkles" size={14}/> YOUR PERSONAL SOUNDTRACK</div><h2>The right sound,<br/>right when you need it.</h2><p>Explore your taste your way. Search for music or describe the vibe you're after.</p><div className="hero-actions"><button className="btn white" onClick={()=>onDiscover()}>Explore music <Icon name="arrow-up-right" size={17}/></button><button className="btn ghost" onClick={()=>onAsk()}>Ask MusicMind <Icon name="sparkles" size={15}/></button></div></div><div className="hero-art" aria-hidden="true"><i className="ring r1"/><i className="ring r2"/><i className="ring r3"/><div className="hero-circle"><Icon name="music" size={66}/></div><span className="star s1">✦</span><span className="star s2">✦</span></div></section>
  <section className="content-section"><div className="section-heading"><div><div className="eyebrow">A LITTLE INSPIRATION</div><h2>What's your vibe today?</h2></div><button className="text-link" onClick={()=>onDiscover()}>Explore all <Icon name="arrow-right" size={16}/></button></div><div className="mood-grid">{vibes.map(v=><button className={`mood-card ${v.color}`} key={v.name} onClick={()=>onDiscover(v.query)}><span className="mood-icon"><Icon name={v.icon} size={23}/></span><Icon className="mood-go" name="arrow-up-right" size={18}/><span className="mood-info"><strong>{v.name}</strong><small>{v.tagline}</small></span></button>)}</div></section>
  <section className="content-section"><div className="section-heading"><div><div className="eyebrow">MADE BY YOU</div><h2>Your collection</h2></div><button className="text-link" onClick={onLibrary}>Go to library <Icon name="arrow-right" size={16}/></button></div>{playlists.length? <div className="home-playlists">{playlists.slice(0,3).map((p,i)=><button className="playlist-tile" onClick={onLibrary} key={p.id}><span className={`cover cover-${i%4}`}><Icon name="music" size={23}/></span><span className="playlist-tile-text"><strong>{p.name}</strong><small>{p.tracks.length} tracks · Local</small></span><Icon name="chevron-right" size={17}/></button>)}</div>:<div className="home-empty"><span className="empty-icon"><Icon name="library" size={26}/></span><div><strong>Your collection starts here.</strong><p>Make a playlist for the music you love. It'll show up right here.</p></div><button className="btn outlined" onClick={onCreate}><Icon name="plus" size={17}/> New playlist</button></div>}</section>
 </div>
}
