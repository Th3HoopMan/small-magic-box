import { navigate } from "gatsby";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import logo from "../../img/CantPauseLogoV2.png";
import * as styles from "./navbar.module.css";
const navLinks = [
  {
    title: "Home",
    navPath: "/",
  },
  {
    title: "Articles",
    navPath: "/articles",
  },
  {
    title: "Reviews",
    navPath: "/reviews",
  },
  {
    title: "About",
    navPath: "/about",
  },
  {
    title: "Contact",
    navPath: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigateToPage = (slug) => {
    setShowMenu(false);
    navigate(slug);
  };

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={styles.navbarContainer}>
        <input
          type="image"
          className={styles.logo}
          name="navbarLogo"
          src={logo}
          alt="logo"
          onClick={navigateHome}
          onKeyPress={navigateHome}
        />
        <div
          className={styles.hamburgerContainer}
          onClick={showMenuHandler}
          role="button"
          onKeyPress={showMenuHandler}
          tabIndex={0}
        >
          <div className={styles.hamburgerTop} />
          <div className={styles.hamburgerMiddle} />
          <div className={styles.hamburgerBottom} />
        </div>
        <div className={styles.navbarLinks}>
          {navLinks.map((item) => {
            return (
              <div
                className={styles.navbarItem}
                onClick={() => navigateToPage(item.navPath)}
                role="link"
                onKeyPress={() => navigateToPage(item.navPath)}
                tabIndex={0}
              >
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <CSSTransition
        in={showMenu}
        timeout={200}
        classNames={{
          enterActive: styles.menuEnterActive,
          enterDone: styles.menuEnterDone,
          exitActive: styles.menuExitActive,
          exitDone: styles.menuExitDone,
        }}
      >
        <div className={styles.menu}>
          <img className={styles.logo} src={logo} alt="logo" />

          {navLinks.map((item) => {
            return (
              <div
                className={styles.menuItem}
                onClick={() => navigateToPage(item.navPath)}
                role="link"
                onKeyPress={() => navigateToPage(item.navPath)}
                tabIndex={0}
              >
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </CSSTransition>
      <CSSTransition
        in={showMenu}
        timeout={200}
        classNames={{
          enterActive: styles.menuBackgroundEnterActive,
          enterDone: styles.menuBackgroundEnterDone,
          exitActive: styles.menuBackgroundExitActive,
          exitDone: styles.menuBackgroundExitDone,
        }}
      >
        <div
          className={styles.menuBackground}
          onClick={hideMenuHandler}
          role="link"
          onKeyPress={hideMenuHandler}
          tabIndex={0}
          aria-label="Background to menu"
        />
      </CSSTransition>
    </div>
  );
};

export default Navbar;
