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

        {/* <div className={styles.socialIcons}>
          <a href="https://twitter.com/Th3HoopMan" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter Logo"/>
          </a>
          <a href="https://open.spotify.com/show/3oNzUYeq8gfRal3MpklVOH?si=3781d5479cce41fe" target="_blank" rel="noopener noreferrer">
            <img src={spotifyLogo} alt="Spotify Logo"/>
          </a>
          <a href="mailto:joseph@cantpause.com">
            <img src={emailLogo} alt="Email Logo"/>
          </a>
        </div> */
        }
        <SocialIcons/>
      </div>
    </div>
  );
};

export default Footer;
