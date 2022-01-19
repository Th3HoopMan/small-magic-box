import React from "react";
import * as styles from "./Footer.module.css";
import twitterLogo from "../../img/twitterLogo.png";
import spotifyLogo from "../../img/spotifyLogo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <h1 className={styles.siteName}>CantPause</h1>
        <div className={styles.socialIcons}>
          <img src={twitterLogo} href="https://twitter.com/Th3HoopMan"/>
          <img src={spotifyLogo} href="https://open.spotify.com/show/3oNzUYeq8gfRal3MpklVOH?si=3781d5479cce41fe"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
