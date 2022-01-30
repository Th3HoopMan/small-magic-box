import React from "react";
import * as styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Newletter</h2>
      <p className={styles.details}>
        Show your support and stay up-to-date on the blog by signing up for the
        site newsletter.
        <br/>
        <br/>
        <span className={styles.noSpam}>Unsubscribe at any time.</span> 
      </p>
      <a
        href="https://cantpause.substack.com/"
        className={styles.subscribe}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.subscribeButton}>Subscribe</h2>
      </a>
    </div>
  );
};

export default Newsletter;
