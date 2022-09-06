import React from 'react';
import * as styles from "./SocialIcons.module.css";
import twitterLogo from "../../img/social/twitterLogo.png";
import spotifyLogo from "../../img/social/spotifyLogo.svg";
import emailLogo from "../../img/social/email_logo.png";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a
        href="https://twitter.com/Th3HoopMan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterLogo} alt="Twitter Logo" />
      </a>
      <a
        href="https://open.spotify.com/show/3oNzUYeq8gfRal3MpklVOH?si=3781d5479cce41fe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={spotifyLogo} alt="Spotify Logo" />
      </a>
      <a href="mailto:joseph.cantpause@gmail.com">
        <img src={emailLogo} alt="Email Logo" />
      </a>
    </div>
  );
};

export default SocialIcons;
