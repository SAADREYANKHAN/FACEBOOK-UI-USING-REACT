import { useState } from "react";
import { Users, MessageCircle, MapPin } from "lucide-react";
import { people } from "../data/mockData";
import Avatar from "./Avatar";
import Post from "./Post";

export default function ProfilePage({
  profile,
  posts,
  onBack,
  onMessage,
  onNotify,
}) {
  const [tab, setTab] = useState("Posts");
  const isYou = profile.id === 99;
  return (
    <div className="profile-page card">
      <div className="cover-photo">
  <img
    src={
       profile.coverPhoto ||
  `https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=82`
    }
    alt={`${profile.name}'s cover`}
    className="cover-image"
  />

  <div className="cover-gradient" />

  <button
    className="cover-edit"
    onClick={() => onNotify("Cover photo editor — demo")}
  >
    📷 Edit cover photo
  </button>
</div>
      <div className="profile-summary">
        <Avatar person={profile} size={150} />
        <div className="profile-details">
          <h1>{profile.name}</h1>
          <p>
            {isYou
              ? "1.2K friends"
              : `${Math.floor(profile.id * 37 + 180)} friends`}{" "}
            · {profile.city || "Pakistan"}, Pakistan
          </p>
          <div className="mutuals">
            {people.slice(0, 4).map((p) => (
              <Avatar key={p.id} person={p} size={26} />
            ))}
            <span>+ 18 mutual friends</span>
          </div>
        </div>
        <div className="profile-actions">
          <button
            className="primary-btn"
            onClick={() =>
              isYou
                ? onNotify("Profile editing — demo")
                : onNotify("Friend request sent!")
            }
          >
            {isYou ? "Edit profile" : "Add friend"}
          </button>
          <button className="secondary-btn" onClick={() => onMessage(profile)}>
            <MessageCircle size={17} /> Message
          </button>
        </div>
      </div>
      <div className="profile-tabs">
        {["Posts", "About", "Friends", "Photos", "Videos"].map((t) => (
          <button
            key={t}
            className={tab === t ? "active" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "Posts" ? (
        <div className="profile-content">
          <div className="profile-intro">
            <h3>Intro</h3>
            <p>🇵🇰 Proud Pakistani · Chai enthusiast ☕</p>
            <p>
              <MapPin size={15} /> Lives in {profile.city || "Pakistan"},
              Pakistan
            </p>
            <button
              className="secondary-btn"
              onClick={() => onNotify("Details editor — demo")}
            >
              Edit details
            </button>
          </div>
          <div className="profile-posts">
            {posts
              .filter((p) => p.person.id === profile.id || isYou)
              .slice(0, 3)
              .map((p) => (
                <Post
                  key={p.id}
                  post={p}
                  onLike={() => onNotify("Like updated")}
                  onProfile={() => {}}
                  onNotify={onNotify}
                />
              ))}
            {!posts.some((p) => p.person.id === profile.id) && !isYou && (
              <div className="empty-profile">
                <Users size={30} />
                <h3>No public posts yet</h3>
                <p>
                  When {profile.name} shares posts publicly, they'll appear
                  here.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="profile-tab-content">
          <h3>{tab}</h3>
          {tab === "About" ? (
            <p>
              Lives in {profile.city || "Pakistan"}, Pakistan · Joined PakBook
              recently · Interested in memes, food and travel.
            </p>
          ) : tab === "Friends" ? (
            <div className="mini-friends">
              {people.slice(0, 8).map((p) => (
                <div key={p.id}>
                  <Avatar person={p} size={58} />
                  <strong>{p.name}</strong>
                  <small>{p.city}</small>
                </div>
              ))}
            </div>
          ) : (
            <p>Nothing to show here yet. Check back soon!</p>
          )}
        </div>
      )}
    </div>
  );
}
