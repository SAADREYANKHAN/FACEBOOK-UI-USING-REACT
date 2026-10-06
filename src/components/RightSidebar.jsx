import { MoreHorizontal, Search, Video, Plus } from 'lucide-react';
import { img } from '../data/mockData';
import Avatar from './Avatar';

export default function RightSidebar({ people, setChat, notify }) {
 return <aside className="right-sidebar"><div className="right-title"><h3>Sponsored</h3><button className="plain" onClick={() => notify('Sponsored content preferences opened')} aria-label="Sponsored options"><MoreHorizontal size={20}/></button></div>
 <button className="sponsored" onClick={() => notify('Demo sponsored item selected')}><img src={img('photo-1556742049-0cfed4f6a45d',400)} alt="Shopping display"/><span><strong>Local finds, big vibes</strong><span>Discover small businesses near you</span><small>pakbook.example</small></span></button>
 <div className="right-divider"/><div className="contacts-head"><h3>Contacts</h3><div><button className="plain" onClick={() => setChat(people[1])} title="New message"><Search size={18}/></button><button className="plain" onClick={() => setChat(people[2])} title="Video chat"><Video size={18}/></button><button className="plain" onClick={() => notify('Contact options opened')} aria-label="Contact options"><MoreHorizontal size={20}/></button></div></div>
 <div className="contact-list">{people.slice(0,12).map(person => <button className="contact" key={person.id} onClick={() => setChat(person)}><span className="contact-avatar"><Avatar person={person} size={36}/>{person.online&&<i/>}</span><span>{person.name}</span></button>)}</div><div className="right-divider"/><h3 className="group-title">Group conversations</h3><button className="create-group" onClick={() => notify('Create group chat — demo mode')}><span><Plus size={20}/></span>Create new group</button></aside>;
}
