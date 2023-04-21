import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbarMain.css";
import WOW from "wowjs";

function NavbarMain() {
  const wowStart = () => {
    new WOW.WOW().init();
  };
  return (
    <>
      <div id="main-header" className="header">
        <ul id="main-nav" className="nav">
          <li>
            <NavLink to="" id="studioLogoContainer">
              <img
                src={require("../../images/logo_test.png")}
                alt=""
                id="studioLogo"
              ></img>
            </NavLink>
          </li>
          <li>
            <Link to="news" onClick={wowStart}>
              News
            </Link>
          </li>
          <li>
            <Link to="introduction" onClick={wowStart}>
              Introduction
            </Link>
          </li>
          <li>
            <Link to="story" onClick={wowStart}>
              Story
            </Link>
          </li>
          <li>
            <Link to="character" onClick={wowStart}>
              Characters
            </Link>
          </li>
          <li>
            <Link to="gameplay" onClick={wowStart}>
              Gameplay
            </Link>
          </li>
          <li>
            <Link to="creator" onClick={wowStart}>
              Creators
            </Link>
          </li>
          <li>
            <NavLink to="/forum">Forum</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarMain;
