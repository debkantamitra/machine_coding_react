import { useEffect, useState } from "react";
import styles from "./styles.module.css";

// caching
// debouncing
// highlighting the searchText

// where will we get data from?

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipesByQuery = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );

      if (response.status === 200) {
        const json = await response.json();

        setRecipes(json.recipes);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (query.length >= 3) {
      getRecipesByQuery();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <h1>AutoComplete</h1>

      <input
        placeholder="Search Recipe"
        type="text"
        name="search-autocomplete"
        id="search-autocomplete"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <div>
        {recipes.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Autocomplete;
