import { useMemo, useState } from "react";
import { navItems, people, seedPosts } from "./data/mockData";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";
import ProfilePage from "./components/ProfilePage";
import FriendsPage from "./components/FriendsPage";
import ExplorePage from "./components/ExplorePage";
import PostComposer from "./components/PostComposer";
import Messenger from "./components/Messenger";

const currentUser = {
  id: 99,
  name: "SAAD REYAN KHAN",
  city: "CHARSADDA",
  avatar:
    "/src/assets/friends/my-profile.jpg",
};

export default function App() {
  const [dark, setDark] = useState(false),
    [activeTab, setActiveTab] = useState("Home"),
    [activeSide, setActiveSide] = useState(""),
    [query, setQuery] = useState(""),
    [posts, setPosts] = useState(seedPosts),
    [draft, setDraft] = useState(""),
    [showComposer, setShowComposer] = useState(false),
    [profile, setProfile] = useState(null),
    [chat, setChat] = useState(null),
    [message, setMessage] = useState(""),
    [messages, setMessages] = useState({}),
    [menu, setMenu] = useState(""),
    [notice, setNotice] = useState(""),
    [showFriends, setShowFriends] = useState(false);
  const filteredPosts = useMemo(
    () =>
      posts
        .filter((p) =>
          `${p.person.name} ${p.caption}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .filter((p) =>
          activeTab === "Videos" || activeTab === "Video"
            ? p.kind === "video"
            : activeTab === "Photos"
              ? p.kind === "photo"
              : true,
        ),
    [posts, query, activeTab],
  );
  const notify = (text) => {
    setNotice(text);
    window.clearTimeout(window.__pakbookToast);
    window.__pakbookToast = window.setTimeout(() => setNotice(""), 2600);
  };
  const selectSide = (label) => {
    setActiveSide(label);
    setActiveTab(
      label === "Video" ? "Videos" : label === "Home" ? "Home" : label,
    );
    setProfile(null);
    setShowFriends(label === "Friends");
    setMenu("");
  };
  const toggleLike = (id) =>
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) }
          : p,
      ),
    );
  const addPost = () => {
    if (!draft.trim()) return;
    setPosts((prev) => [
      {
        id: Date.now(),
        person: currentUser,
        time: "Just now",
        caption: draft.trim(),
        image: "",
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        kind: "text",
      },
      ...prev,
    ]);
    setDraft("");
    setShowComposer(false);
    setActiveTab("Home");
    setActiveSide("");
    notify("Your post has been published!");
  };
  const sendMessage = () => {
    if (!message.trim() || !chat) return;
    setMessages((prev) => ({
      ...prev,
      [chat.id]: [
        ...(prev[chat.id] || []),
        { from: "you", text: message.trim() },
      ],
    }));
    setMessage("");
  };
  const openNav = (label) => {
    setActiveTab(label === "Video" ? "Videos" : label);
    setActiveSide(label === "Home" ? "" : label);
    setProfile(null);
    setShowFriends(label === "Friends");
    setMenu("");
  };
  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <Navbar
        dark={dark}
        setDark={setDark}
        activeTab={activeTab}
        openNav={openNav}
        query={query}
        setQuery={setQuery}
        menu={menu}
        setMenu={setMenu}
        setChat={setChat}
        currentUser={currentUser}
        onProfile={setProfile}
        people={people}
      />
      {menu === "mobile" && (
        <div className="mobile-nav">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => selectSide(label)}>
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>
      )}
      <div className="layout">
        <LeftSidebar
          navItems={navItems}
          activeSide={activeSide}
          selectSide={selectSide}
          dark={dark}
          setDark={setDark}
          currentUser={currentUser}
          onProfile={setProfile}
        />
        <main className="feed-area">
          {profile ? (
            <ProfilePage
              profile={profile}
              posts={posts}
              onBack={() => setProfile(null)}
              onMessage={() => setChat(profile)}
              onNotify={notify}
            />
          ) : activeTab === "Friends" ||
            activeSide === "Friends" ||
            showFriends ? (
            <FriendsPage
              onProfile={setProfile}
              onMessage={setChat}
              onBack={() => {
                setShowFriends(false);
                setActiveTab("Home");
                setActiveSide("");
              }}
            />
          ) : [
              "Marketplace",
              "Groups",
              "Events",
              "Gaming",
              "Saved",
              "Memories",
              "Pages",
              "Feeds",
            ].includes(activeTab) ? (
            <ExplorePage tab={activeTab} onNotify={notify} />
          ) : (
            <Feed
              activeTab={activeTab}
              filteredPosts={filteredPosts}
              query={query}
              setQuery={setQuery}
              setActiveTab={setActiveTab}
              setActiveSide={setActiveSide}
              setDraft={setDraft}
              setShowComposer={setShowComposer}
              currentUser={currentUser}
              toggleLike={toggleLike}
              setProfile={setProfile}
              notify={notify}
            />
          )}
        </main>
        <RightSidebar people={people} setChat={setChat} notify={notify} />
      </div>
      {showComposer && (
        <PostComposer
          draft={draft}
          setDraft={setDraft}
          onClose={() => setShowComposer(false)}
          onPublish={addPost}
          currentUser={currentUser}
        />
      )}
      <Messenger
        chat={chat}
        setChat={setChat}
        messages={messages}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        notify={notify}
      />
      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
    </div>
  );
}
