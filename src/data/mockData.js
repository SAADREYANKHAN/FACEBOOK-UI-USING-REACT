
import {
  Users,
  Store,
  Clock3,
  Bookmark,
  CalendarDays,
  Flag,
  Gamepad2,
  Globe2,
  Play,
} from "lucide-react";

// Automatically load images from src/assets/friends
const friendImages = import.meta.glob(
  "../assets/friends/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Match image filenames with friend names
const getFriendAvatar = (name) => {
  const normalize = (value) =>
    value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const match = Object.entries(friendImages).find(([path]) => {
    const filename = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "");

    return normalize(filename) === normalize(name);
  });

  return (
    match?.[1] ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&background=1877f2&color=fff`
  );
};

// Friends data
export const people = [
  ["Abbas", "Peshawar"],
  ["Abdullah", "Lahore"],
  ["Afnan", "Karachi"],
  ["Ehtesham", "Islamabad"],
  ["Ikram", "Abbottabad"],
  ["Izaz", "Multan"],
  ["Maaz", "Quetta"],
  ["Mustafa", "Faisalabad"],
  ["Nasrullah", "Rawalpindi"],
  ["Talha", "Sialkot"],
  ["Umair", "Gujranwala"],
  ["waleed", "Swat"],
  ["Waqas", "Hyderabad"],
  ["Iqra Yousaf", "Mardan"],
  ["Taha Siddiqui", "Bahawalpur"],
  ["Maryam Khan", "Murree"],
].map((p, i) => ({
  id: i + 1,
  name: p[0],
  city: p[1],
  avatar: getFriendAvatar(p[0]),
  online: i % 4 !== 1,
}));

// Post captions
const captions = [
  "Ammi said “bas 5 minute phone”... that was 3 episodes ago 😭😂",
  "POV: bijli goes right when the match reaches the last over 🥲🏏",
  "When Abbu asks who finished the biryani and everyone becomes a detective 🍚😂",
  "Chai is not a drink. It is an emotion, yaar ☕💚",
  "Pakistani weddings: 10% nikkah, 90% deciding who gets the last gulab jamun 😂",
  "Friend: be ready at 7. Me at 7:03: abhi shoes pehen raha hoon 😎",
  "That one cousin who becomes a photographer at every family event 📸🤣",
  "Weather says sunny. Islamabad says four seasons in one hour 🌦️",
  "When the teacher says “this will not come in the exam” and it is question number one 😭📚",
  "Weekend plan: chai, friends, and absolutely no plans. Perfect scene ❤️",
  "The group chat after someone says “guys, I have an idea” 💀😂",
  "Karachi traffic taught me patience I never asked for 🚗😅",
  "One plate of fries for the table = a social experiment 🍟",
  "Desi parents hear one sneeze and bring the whole pharmacy 🤧❤️",
  "Me saving money all week then seeing a food deal: bismillah 🍔😂",
  "If chai could solve all problems, Pakistan would be unstoppable ☕✨",
];

// Post photo IDs
export const photoIds = [
  "photo-1529042410759-befb1204b468",
  "photo-1517248135467-4c7edcad34c4",
  "photo-1504674900247-0877df9cc836",
  "photo-1512621776951-a57141f2eefd",
  "photo-1498837167922-ddd27525d352",
  "photo-1528605248644-14dd04022da1",
  "photo-1515003197210-e0cd7184f8b5",
  "photo-1540189549336-e6e99c3679fe",
  "photo-1504754524776-8f4f37790ca0",
  "photo-1525351484163-7529414344d8",
  "photo-1555939594-58d7cb561ad1",
  "photo-1513104890138-7c749659a591",
];

// Unsplash image helper
export const img = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;

// Generate sample posts
export const seedPosts = Array.from({ length: 32 }, (_, i) => {
  const caption = captions[i % captions.length];

  const photoId =
    i % captions.length === 6
      ? "photo-1515003197210-e0cd7184f8b5"
      : photoIds[i % photoIds.length];

  return {
    id: i + 1,
    person: people[(i * 5 + 2) % people.length],
    time: [`${i + 1} min`, `${i + 2} hr`, "Yesterday", "2 days"][i % 4],
    caption,
    image:
      caption ===
      "That one cousin who becomes a photographer at every family event 📸🤣"
        ? "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1000"
        : img(photoId, 1000),
    likes: 128 + i * 47,
    comments: 12 + i * 7,
    shares: 3 + i * 4,
    liked: false,
    kind: i % 7 === 3 ? "video" : "photo",
  };
});

// Sidebar navigation items
export const navItems = [
  { label: "Friends", icon: Users },
  { label: "Memories", icon: Clock3 },
  { label: "Saved", icon: Bookmark },
  { label: "Groups", icon: Users },
  { label: "Video", icon: Play },
  { label: "Marketplace", icon: Store },
  { label: "Feeds", icon: Globe2 },
  { label: "Events", icon: CalendarDays },
  { label: "Pages", icon: Flag },
  { label: "Gaming", icon: Gamepad2 },
];