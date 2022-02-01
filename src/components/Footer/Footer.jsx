import React from "react";
import * as styles from "./Footer.module.css";
import SocialIcons from "../SocialIcons/SocialIcons"

import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <Link to="/" className={styles.homeLink}>
          <h1 className={styles.siteName}>CantPause</h1>
        </Link>
        <SocialIcons/>
      </div>
    </div>
  );
};

export default Footer;
