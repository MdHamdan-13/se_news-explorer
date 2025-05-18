import "./Header.css";
import logoutIcon from "../../assets/logout.svg";

function Header() {
  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>

      <div className="header__nav">
        <a href="" className="header__home-link">
          Home
        </a>
        <a href="" className="header__saved-news-link">
          Saved articles
        </a>

        <button className="header__logout-button">
          Logout
          <img
            src={logoutIcon}
            alt="Logout Icon"
            className="header__logout-icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
