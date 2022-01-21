import React from "react";
import * as styles from "./Layout.module.css";
import "../app.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
