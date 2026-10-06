import { Sun, Moon } from 'lucide-react';
import Avatar from './Avatar';

export default function LeftSidebar({ navItems, activeSide, selectSide, dark, setDark, currentUser, onProfile }) {
 return <aside className="left-sidebar"><button className="side-user" onClick={() => onProfile(currentUser)}><Avatar person={currentUser}/><span>{currentUser.name}</span></button>
 {navItems.map(({label,icon:Icon},i) => <button key={label} className={`side-link ${activeSide===label?'side-active':''}`} onClick={() => selectSide(label)}><span className={`side-icon color-${i}`}><Icon size={23}/></span><span>{label}</span></button>)}
 <button className="side-link" onClick={() => setDark(v => !v)}><span className="side-icon theme-icon">{dark?<Sun size={22}/>:<Moon size={22}/>}</span><span>{dark?'Light mode':'Dark mode'}</span><span className={`switch ${dark?'on':''}`}><i/></span></button>
 <div className="sidebar-footer">Privacy · Terms · Advertising · Cookies · More · PakBook © 2026</div></aside>;
}
