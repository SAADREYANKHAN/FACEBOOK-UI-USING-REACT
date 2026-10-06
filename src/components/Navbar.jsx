import { Home, Users, Store, Video, Gamepad2, Search, MessageCircle, Bell, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import Avatar from './Avatar';

export default function Navbar({ dark, setDark, activeTab, openNav, query, setQuery, menu, setMenu, setChat, currentUser, onProfile, people }) {
  return <header className="topbar">
    <div className="brand-area"><button className="mobile-menu icon-btn" onClick={() => setMenu(menu === 'mobile' ? '' : 'mobile')} aria-label="Open menu"><Menu size={22}/></button><button className="brand" onClick={() => openNav('Home')} aria-label="PakBook home">f</button>
      <div className="searchbox"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search PakBook" aria-label="Search posts"/>{query && <button onClick={() => setQuery('')} className="plain" aria-label="Clear search"><X size={15}/></button>}</div>
    </div>
    <nav className="top-nav" aria-label="Main navigation">{[{label:'Home',icon:Home},{label:'Video',icon:Video},{label:'Friends',icon:Users},{label:'Marketplace',icon:Store},{label:'Gaming',icon:Gamepad2}].map(({label,icon:Icon}) => <button key={label} className={`top-nav-item ${activeTab === label || activeTab === (label === 'Video' ? 'Videos' : '') ? 'selected' : ''}`} onClick={() => openNav(label)} title={label} aria-label={label}><Icon size={25}/></button>)}</nav>
    <div className="top-actions"><button className="icon-btn" title="Toggle dark mode" aria-label="Toggle dark mode" onClick={() => setDark(v => !v)}>{dark ? <Sun size={20}/> : <Moon size={20}/>}</button><button className="icon-btn" title="Messenger" aria-label="Open Messenger" onClick={() => setChat(v => v ? null : people[0])}><MessageCircle size={20}/><i className="dot-badge"/></button><button className="icon-btn" title="Notifications" aria-label="Notifications" onClick={() => setMenu(menu === 'notifications' ? '' : 'notifications')}><Bell size={20}/><i className="red-badge">3</i></button><button className="profile-mini" onClick={() => onProfile(currentUser)} aria-label="Open your profile"><Avatar person={currentUser} size={36}/><ChevronDown size={14}/></button></div>
    {menu === 'notifications' && <div className="dropdown notification-drop"><h3>Notifications</h3><p>🎉 Ayesha Malik reacted to your post.</p><p>👋 Hamza Khan sent you a friend request.</p><p>🎂 It is Fatima Noor's birthday today!</p></div>}
  </header>;
}
