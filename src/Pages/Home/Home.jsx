import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home_main_page">
        <div className="home_page_left_aside">
          <ul style={{ listStyle: "none" }}>
            <li>Home</li>
            <li>Explore</li>
            <li>Bookmarks</li>
            <li>Liked Posts</li>
          </ul>
          <button>Create New Post</button>
        </div>
        <div className="home_page_center">
          post where u can post or u ca n see data need tyo do with api calls
          and backend data
        </div>
        <div className="home_page_right_aside">
          <h3> Suggestions for you</h3>
          <p>
            his profile and hid name and bleow his username and a follow btn
          </p>
        </div>
      </div>
    </>
  );
};
