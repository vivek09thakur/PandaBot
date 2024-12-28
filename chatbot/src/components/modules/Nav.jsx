import Logo from "../../assets/logo.jpg";
import "./Styles/nav.css";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_logo">
          <img src={Logo} alt="app_logo" />
        </div>
        <div className="nav_links">
          <a
            href="https://github.com/vivek09thakur"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet developers
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
