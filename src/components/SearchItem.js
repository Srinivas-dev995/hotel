import React, { useState } from "react";
import styles from "./Container.module.css";
import Item from "./Item";

const SearchItem = ({ items }) => {
  const [search, setSearchItem] = useState("");
  
  

  return (
    <>
      <div className={`${styles.foodInputContainer}`}>
        <input
          className={styles.foodInput}
          type="search"
          placeholder="search for your order"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      <ul className="list-group">
        {items
          .filter((item) => item.includes(search))
          .map((item) => (
            <Item key={item} item={item} onDeleteButton={item} />
          ))}
      </ul>
    </>
  );
};

export default SearchItem;
