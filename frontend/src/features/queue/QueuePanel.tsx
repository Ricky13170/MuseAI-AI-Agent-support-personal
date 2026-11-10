import { Icon } from '../../components/Icon'

export function Queue({onClose}:{onClose:()=>void}){
 return <><button className="scrim" onClick={onClose} aria-label="Close queue"/><aside className="queue-drawer" role="dialog" aria-modal="true" aria-label="Play queue"><header><div><div className="eyebrow accent">COMING UP</div><h2>Play queue</h2></div><button className="icon-btn" onClick={onClose} aria-label="Close queue"><Icon name="x" size={22}/></button></header><div className="queue-current"><div className="eyebrow">NOW PLAYING</div><div><span className="track-art"><Icon name="music" size={23}/></span><p><strong>Nothing playing</strong><small>Select a track to begin</small></p></div></div><div className="queue-next"><div className="eyebrow">UP NEXT · 0 TRACKS</div><span className="empty-icon"><Icon name="list" size={37}/></span><h3>Your queue is empty</h3><p>Verified tracks you add to the queue will appear here after music catalog integration.</p></div></aside></>
}
