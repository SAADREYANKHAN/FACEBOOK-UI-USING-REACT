# PakBook — component-wise React project

## Run in VS Code
1. Extract this ZIP.
2. Open the extracted `pakbook-componentized` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`
5. Run `npm run dev` and open the local URL Vite prints.

## Component structure
- `src/App.jsx` — app state and connects components
- `src/components/Navbar.jsx` — top navigation, search, dark-mode control
- `src/components/LeftSidebar.jsx` — left navigation and theme switch
- `src/components/RightSidebar.jsx` — sponsored panel and contact list
- `src/components/Feed.jsx` — stories, post composer entry point, feed list
- `src/components/Post.jsx` — individual post, likes and comments
- `src/components/PostComposer.jsx` — create-post modal
- `src/components/Messenger.jsx` — chat window and sending messages
- `src/components/Avatar.jsx` — reusable profile image with fallback
- `src/components/Stories.jsx` — stories row
- `src/components/ProfilePage.jsx` — profile page and tabs
- `src/components/FriendsPage.jsx` — friends page
- `src/components/ExplorePage.jsx` — community/section pages
- `src/data/mockData.js` — fictional Pakistani users, posts, nav data
- `src/styles.css` — shared design system and responsive styling

The demo's navigation, theme toggle, likes, comments, post publishing, profile views, friends page, and Messenger sending are wired up. Calls and some discovery actions are UI demos, not real external services. Images use initials-based avatars to avoid broken third-party portrait links. Internet access is needed for remote Unsplash cover/post photos.
