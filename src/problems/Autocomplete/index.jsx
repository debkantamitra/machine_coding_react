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

  const getRecipesByQuery = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );

      if (response.status === 200) {
        const json = await response.json();

        setResults(json.recipes);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const timer = setTimeout(getRecipesByQuery, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

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
        <div className="result__container">
          {results.length > 0 ? (
            results.map((item, index) => {
              return (
                <span key={index} className="result">
                  {item.name}
                </span>
              );
            })
          ) : (
            <span className="result" style={{ textAlign: "center" }}>
              No Results
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
