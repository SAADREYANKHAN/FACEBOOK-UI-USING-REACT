import { Plus, X } from "lucide-react";
import { useState } from "react";
import { people } from "../data/mockData";
import myProfile from "../assets/friends/My-Profile.jpg";

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="stories">
      {[
        {
          name: "Create story",
          img: myProfile,
          create: true,
        },
        ...people.slice(0, 5).map((p) => ({
          ...p,
          img: p.avatar,
        })),
      ].map((s, i) => (
        <div
          className={`story ${s.create ? "create-story" : ""}`}
          key={s.name}
          onClick={() => {
            if (!s.create) {
              setSelectedStory(s);
            }
          }}
          style={
            s.create
              ? {}
              : {
                  backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.7),transparent 55%),url(${s.img})`,
                }
          }
        >
          {s.create ? (
            <>
              <img src={s.img} alt="Your profile" />

              <span className="story-plus">
                <Plus size={22} />
              </span>

              <strong>Create story</strong>
            </>
          ) : (
            <>
              <span className="story-ring">
                <img src={s.img} alt="" />
              </span>

              <strong>{s.name.split(" ")[0]}</strong>
            </>
          )}
        </div>
      ))}

      {selectedStory && (
        <div className="story-viewer">
          <button
            className="story-close"
            onClick={() => setSelectedStory(null)}
          >
            <X size={28} />
          </button>

          <div className="story-viewer-content">
            <div className="story-viewer-header">
              <img
                src={selectedStory.img}
                alt={selectedStory.name}
              />

              <strong>{selectedStory.name}</strong>
            </div>

            <img
              src={selectedStory.img}
              alt={selectedStory.name}
              className="story-viewer-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}