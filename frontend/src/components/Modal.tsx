import { useEffect, type ReactNode } from 'react'
import { Icon } from './Icon'

interface ModalProps {title:string;description?:string;onClose:()=>void;children:ReactNode}
export function Modal({title,description,onClose,children}:ModalProps){
 useEffect(()=>{const fn=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()};window.addEventListener('keydown',fn);return()=>window.removeEventListener('keydown',fn)},[onClose])
 return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div className="modal-head"><h2 id="dialog-title">{title}</h2><button className="icon-btn" onClick={onClose} aria-label="Close dialog"><Icon name="x" size={18}/></button></div>{description&&<p className="modal-description">{description}</p>}{children}</section></div>
}
