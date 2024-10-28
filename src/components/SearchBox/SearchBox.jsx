import styles from "./SearchBox.module.css";

const SearchBox = ({ setFilter, filter }) => {
  return (
    <div className={styles.div}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        value={filter}
        type="text"
        placeholder="enter name..."
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};
export default SearchBox;
