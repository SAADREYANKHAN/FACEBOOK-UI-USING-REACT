import { useState } from "react";
import {
  Globe2,
  MoreHorizontal,
  Video,
  ThumbsUp,
  MessageSquare,
  Share2,
  Send,
} from "lucide-react";
import Avatar from "./Avatar";

export default function Post({ post, onLike, onProfile, onNotify }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  return (
    <article className="post card">
      <div className="post-head">
        <Avatar person={post.person} onClick={() => onProfile(post.person)} />
        <div className="post-author">
          <button onClick={() => onProfile(post.person)}>
            {post.person.name}
          </button>
          <span>
            {post.time} · <Globe2 size={12} />
          </span>
        </div>
        <button
          className="plain post-more"
          onClick={() => onNotify("Post options: Save, Hide, Report (demo)")}
        >
          <MoreHorizontal size={23} />
        </button>
      </div>
      <p className="post-caption">{post.caption}</p>
      {post.image && (
        <div className="post-media">
          {post.kind === "video" ? (
            <>
              <video controls playsInline preload="none" poster={post.image}>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support video.
              </video>
              <span className="media-label">
                <Video size={14} /> Sample video
              </span>
            </>
          ) : (
            <img
  src={post.image}
  alt="Community photo"
  loading="lazy"
  onError={(e) => {
    console.error("Post image failed to load:", post.image);
  }}
/>
          )}
        </div>
      )}
      <div className="post-stats">
        <span>
          <span className="reaction-bubbles">
            <i>👍</i>
            <i>❤️</i>
            <i>😂</i>
          </span>{" "}
          {post.likes.toLocaleString()}
        </span>
        <button onClick={() => setShowComments(!showComments)}>
          {post.comments + comments.length} comments
        </button>
        <span>{post.shares} shares</span>
      </div>
      <div className="post-actions">
        <button
          className={post.liked ? "liked" : ""}
          onClick={() => onLike(post.id)}
        >
          <ThumbsUp size={19} fill={post.liked ? "currentColor" : "none"} />
          <span>{post.liked ? "Liked" : "Like"}</span>
        </button>
        <button onClick={() => setShowComments(!showComments)}>
          <MessageSquare size={19} />
          <span>Comment</span>
        </button>
        <button onClick={() => onNotify("Post shared to your demo timeline")}>
          <Share2 size={19} />
          <span>Share</span>
        </button>
      </div>
      {showComments && (
        <div className="comments-area">
          {comments.map((c, i) => (
            <div className="comment" key={i}>
              <Avatar
                person={{
                  avatar:
                    "https://ui-avatars.com/api/?name=Saad+Qureshi&background=1877f2&color=fff&size=160&bold=true",
                }}
                size={30}
              />
              <div>
                <strong>You</strong>
                <p>{c}</p>
              </div>
            </div>
          ))}
          <form
            className="comment-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (comment.trim()) {
                setComments([...comments, comment.trim()]);
                setComment("");
              }
            }}
          >
            <Avatar
              person={{
                avatar:
                  "https://ui-avatars.com/api/?name=Saad+Qureshi&background=1877f2&color=fff&size=160&bold=true",
              }}
              size={30}
            />
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment…"
            />
            <button disabled={!comment.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </article>
  );
}
