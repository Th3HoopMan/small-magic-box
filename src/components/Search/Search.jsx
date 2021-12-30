import React from "react";
import * as styles from "./Search.module.css";
import ReviewPreview from "../ReviewPreview/ReviewPreview";
import CompactArticlePreview from "../CompactArticlePreview/CompactArticlePreview";

import { useRef } from "react";
import { useState } from "react";

const data = [
  {
    title: "Halo Infinite",
    platform: "Xbox Series X",
    grade: "B+",
    category: "Review",
  },
  {
    title: "Psychonauts 2",
    platform: "Xbox Series X",
    grade: "A",
    category: "Review",
  },
  {
    title: "Returnal",
    platform: "PS5",
    grade: "B+",
    category: "Review",
  },
  {
    title: "Halo 2",
    platform: "Xbox 360",
    grade: "A+",
    category: "Review",
  },
];
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

  console.log(results);
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
                title={result.gameTitle}
                platform={result.platform}
                grade={result.grade}
              />
            )}
            {!review && (
              <CompactArticlePreview
              title={result.title}
              category={result.category}
            />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
