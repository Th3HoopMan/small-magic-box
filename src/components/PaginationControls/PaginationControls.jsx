import React from "react";
import { Link } from "gatsby";
import * as styles from "./PaginationControls.module.css";

const PaginationControls = ({ slug, current, max }) => {
  return (
    <div>
      {current > 1 && <Link to={current - 1 === 1 ? `/${slug}` : `/${slug}/${current - 1}`}>Previous</Link>}
      {current + 1 <=  max && <Link to={`/${slug}/${current + 1}`}>Next</Link>}
    </div>
  );
};

export default PaginationControls;
