import React from "react";
import * as styles from "./Search.module.css";
import ReviewPreview from "../ReviewPreview/ReviewPreview";
import CompactArticlePreview from "../CompactArticlePreview/CompactArticlePreview";

import { useRef } from "react";
import { useState } from "react";

const Search = ({ review = false, data, searchFilter }) => {
  const searchInput = useRef();
  const [results, setResults] = useState(data);

  
  const searchInputHandler = () => {
    const searchText = searchInput.current.value.toLowerCase().trim();
    if (!searchInput.current.value) {
      setResults(data);
    }
    const filteredResults = data.filter((item) => {
      return searchFilter(item, searchText);
    });
    setResults(filteredResults);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBox}
        ref={searchInput}
        onChange={searchInputHandler}
      />
      <ul className={styles.list}>
        {results.map((result) => (
          <li>
            {review && (
              <ReviewPreview
                title={result.gametitle}
                grade={result.grade}
                slug={result.slug}
              />
            )}
            {!review && (
              <CompactArticlePreview
              title={result.title}
              category={result.category}
              slug={result.slug}
              imgSrc={result.featuredimage.childrenImageSharp[0]}
            />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
