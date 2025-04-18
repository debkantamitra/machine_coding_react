import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// caching
// debouncing
// highlighting the searchText

// where will we get data from?

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [highlightedIndex, setHighlightedIndex] = useState();

  const getRecipesByQuery = async () => {
    const trimmedQuery = query.trimEnd();

    if (cache[trimmedQuery]) {
      console.log("Returned from cache for: " + trimmedQuery);
      setResults(cache[trimmedQuery]);

      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${trimmedQuery}`
      );

      if (response.status === 200) {
        const json = await response.json();

        // setting the cache, we could use
        // localStorage for persistant if needed
        setCache((prev) => ({ ...prev, [trimmedQuery]: json.recipes }));
        setResults(json.recipes);

        console.log("Returned from API for: " + trimmedQuery);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (query.length < 1) return;
    // example of debounce with vanilla js

    // function debounce(callback, delay) {
    //      let timer;
    //
    //      function (...args) {
    //         clearTimeout(timer);
    //
    //         timer = setTimeout(() => callback(...args), delay)
    //      }
    //}
    const timer = setTimeout(getRecipesByQuery, 300);

    return () => {
      // usual misconception is that the clean up happens only when component de mounts,
      // but it happens whenever the dependency change and the effect re runs

      clearTimeout(timer);
    };
  }, [query]);

  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     const key = e.key;

  //     if (key === "ArrowUp" && highlightedIndex > 0) {
  //       setHighlightedIndex(highlightedIndex - 1);
  //     } else if (key === "ArrowDown") {
  //       // console.log(highlightedIndex, results.length);
  //       if (typeof highlightedIndex === "undefined") {
  //         setHighlightedIndex(0);
  //       }

  //       if (highlightedIndex >= 0) {
  //         setHighlightedIndex(highlightedIndex + 1);
  //       }
  //     }
  //   });
  // }, []);

  // console.log(highlightedIndex, "@index");

  return (
    <div className={styles.container}>
      <h1>AutoComplete</h1>

      <input
        placeholder="Search for Recipe"
        type="text"
        name="search-autocomplete"
        id="search-autocomplete"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />

      {showResults && (
        <div className={styles.result__container}>
          {results.length > 0 ? (
            results.map((item, index) => {
              return (
                <span
                  key={index}
                  className={`${styles.result} ${index === highlightedIndex && styles.result__active}`}
                >
                  {item.name}
                </span>
              );
            })
          ) : (
            <span className={styles.result} style={{ textAlign: "center" }}>
              No Results
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
