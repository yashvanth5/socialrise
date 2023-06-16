import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar_main_page">
        <div>
          <p>Social Rise</p>
        </div>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <div>
          <button>toggle (dark or light)</button>
          <button>profile</button>
        </div>
      </div>
    </>
  );
};
