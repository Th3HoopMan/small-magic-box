import React from "react";
import * as styles from "./TLDR.module.css";

const TLDR = ({ summary }) => {
  return (
    <div className={styles.container}>
      <h1>TLDR</h1>
      <p>{summary}</p>
    </div>
  );
};

export default TLDR;
