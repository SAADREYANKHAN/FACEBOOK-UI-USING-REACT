import { Settings } from "lucide-react";
import { img, photoIds } from "../data/mockData";

export default function ExplorePage({ tab, onNotify }) {
  const data =
    {
      Marketplace: [
        "Fresh finds from Pakistani sellers",
        "Handmade truck-art mugs",
        "Pre-loved books & accessories",
        "Home-made snacks in your city",
      ],
      Groups: [
        "Find your people",
        "Pakistani Memes & Chill",
        "Foodies of Pakistan",
        "React Developers Pakistan",
      ],
      Events: [
        "What’s happening around you",
        "University meetup — Islamabad",
        "Weekend chai hangout",
        "Local comedy night",
      ],
      Gaming: [
        "Ready player one?",
        "Squad gaming Pakistan",
        "Casual game night",
        "Community tournament",
      ],
      Saved: [
        "Your saved collection",
        "Funny memes to share later",
        "React learning resources",
        "Weekend travel ideas",
      ],
      Memories: [
        "A little trip down memory lane",
        "Your best moments from last year",
        "That unforgettable chai meetup",
        "Family Eid memories",
      ],
      Pages: [
        "Pages to follow",
        "Pakistani Food Diaries",
        "Desi Comedy Club",
        "Travel Pakistan",
      ],
     Feeds: [
  "Choose your feed",
  "Favorites",
  "Friends",
  "Most recent",
],
    }[tab] || [];
  return (
    <div className="explore-page card">
      <div className="explore-title">
        <div>
          <span className="eyebrow">PAKBOOK COMMUNITY</span>
          <h1>{tab}</h1>
        </div>
        <button
          className="secondary-btn"
          onClick={() => onNotify(`${tab} settings opened`)}
        >
          <Settings size={16} /> Settings
        </button>
      </div>
      <p className="explore-intro">
        A demo {tab.toLowerCase()} space with sample Pakistani community
        content. Explore, click around, and make it your own.
      </p>
      <div className="explore-grid">
        {data.slice(1).map((title, i) => (
          <div className="explore-card" key={title}>
            <img
  
 src={
  tab === "Gaming" && title === "Squad gaming Pakistan"
    ? "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=82"
    : title === "React learning resources"
    ? "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=82"
    : tab === "Groups" && title === "Pakistani Memes & Chill"
    ? "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=600&q=82"
    : tab === "Feeds" && title === "Friends"
    ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=82"
    : tab === "Events" && title === "University meetup — Islamabad"
    ? "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=82"
    : tab === "Pages" && title === "Desi Comedy Club"
    ? "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=600&q=82"
    : img(photoIds[(i + tab.length) % photoIds.length], 600)
}
  alt={title}
/>
            <div className="explore-card-content">
              <span className="eyebrow">
                {tab === "Marketplace"
                  ? "LOCAL PICK"
                  : tab === "Events"
                    ? "UPCOMING"
                    : "COMMUNITY"}
              </span>
              <h3>{title}</h3>
              <p>
                {
                  [
                    "Shared by your community",
                    "Popular around Pakistan",
                    "A good place to connect",
                  ][i % 3]
                }
              </p>
              <button
                className="primary-btn"
                onClick={() => onNotify(`${title} opened in demo mode`)}
              >
                {tab === "Marketplace"
                  ? "View listing"
                  : tab === "Events"
                    ? "Interested"
                    : "Explore"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
