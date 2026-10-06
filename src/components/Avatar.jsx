import { useState } from 'react';
import { people } from '../data/mockData';

// Uses a reliable initials avatar if the photo URL fails.
export default function Avatar({ person, size = 40, onClick }) {
  const [failed, setFailed] = useState(false);
  const name = person?.name || 'PakBook user';
  const initials = name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase();
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1877f2&color=fff&size=160&bold=true`;
  return <img onClick={onClick} className="avatar" style={{ width: size, height: size }}
    src={failed ? fallback : (person?.avatar || people[4].avatar)} alt={name}
    onError={() => { if (!failed) setFailed(true); }} />;
}
