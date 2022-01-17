import React from "react";
import { Link } from "gatsby";
import * as styles from "./PaginationControls.module.css";

const PaginationControls = ({ slug, current, max }) => {
  return (
    <div className={styles.container}>
      {current > 1 && (
        <Link className={styles.navButton} to={current - 1 === 1 ? `/${slug}` : `/${slug}/${current - 1}`}>
          Previous
        </Link>
      )}
      {current + 1 <= max && <Link className={styles.navButton}  to={`/${slug}/${current + 1}`}>Next</Link>}
    </div>
  );
};

export default PaginationControls;
