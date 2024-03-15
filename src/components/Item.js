import styles from "./Container.module.css";

const Item = ({ item }) => {
  return (
    <li className="list-group-item">
      {item}
      <button
        className={`${styles.button} btn btn-info`}
        
      >
        Buy
      </button>
      <button
        className={`${styles.button} btn btn-danger `}
        
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
