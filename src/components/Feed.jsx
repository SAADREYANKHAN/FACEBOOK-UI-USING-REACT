import { Video, Image as ImageIcon, Smile, Settings, Search, Sparkles } from 'lucide-react';
import Avatar from './Avatar';
import Stories from './Stories';
import Post from './Post';

export default function Feed({ activeTab, filteredPosts, query, setQuery, setActiveTab, setActiveSide, setDraft, setShowComposer, currentUser, toggleLike, setProfile, notify }) {
 return <>{activeTab==='Home'&&<Stories/>}<div className="feed-column">
 {activeTab==='Home'&&<div className="composer card"><div className="composer-top"><Avatar person={currentUser} size={42}/><button className="composer-input" onClick={() => setShowComposer(true)}>What's on your mind?</button></div><div className="composer-divider"/><div className="composer-actions"><button onClick={() => {setDraft('Going live from Pakistan 🇵🇰');setShowComposer(true)}}><span className="live-icon"><Video size={21}/></span> Live video</button><button onClick={() => {setDraft('📸 Sharing a new photo!');setShowComposer(true)}}><span className="photo-icon"><ImageIcon size={22}/></span> Photo/video</button><button onClick={() => {setDraft('Feeling blessed today ❤️');setShowComposer(true)}}><span className="feeling-icon"><Smile size={22}/></span> Feeling/activity</button></div></div>}
 <div className="feed-heading"><h2>{activeTab==='Videos'||activeTab==='Video'?'Videos for you':activeTab==='Photos'?'Photos from your community':activeTab==='Home'?'Latest posts':activeTab}</h2><button className="muted-btn" onClick={() => notify('Feed preferences opened in demo mode')}><Settings size={17}/> Feed settings</button></div>
 {filteredPosts.length===0&&<div className="card empty"><Search size={28}/><h3>No results found</h3><p>Try another search or switch to Home.</p><button className="primary-btn" onClick={() => {setQuery('');setActiveTab('Home');setActiveSide('')}}>Back to Home</button></div>}
 {filteredPosts.map(post => <Post key={post.id} post={post} onLike={toggleLike} onProfile={setProfile} onNotify={notify}/>)}<div className="load-more"><Sparkles size={18}/> You're all caught up! More funny Pakistani posts are coming soon.</div>
 </div></>;
}
