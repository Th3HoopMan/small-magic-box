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

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.hamburgerContainer} onClick={showMenuHandler}>
          <div className={styles.hamburgerTop} />
          <div className={styles.hamburgerMiddle} />
          <div className={styles.hamburgerBottom} />
        </div>
        <img className={styles.logo} src={logo} alt="logo"/>
        <div className={styles.navbarLinks}>
          {navLinks.map((item) => {
            return (
              <div
                className={styles.navbarItem}
                onClick={() => navigateToPage(item.navPath)}
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
          <h2 className={styles.menuTitle}>CantPause</h2>

          {navLinks.map((item) => {
            return (
              <div
                className={styles.menuItem}
                onClick={() => navigateToPage(item.navPath)}
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
        <div className={styles.menuBackground} onClick={hideMenuHandler} />
      </CSSTransition>
    </div>
  );
};

export default Navbar;
