import styles from "./Contact.module.css";
import { HiUser } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

const Contact = ({ id, name, number, onDeleteProfile }) => {
  return (
    <div className={styles.div}>
      <div>
        <p className={styles.name}>
          <HiUser className={styles.icon} size="24" />
          {name}
        </p>
        <p className={styles.name}>
          <AiFillPhone className={styles.icon} size="24" />
          {number}
        </p>
      </div>
      <button className={styles.button} onClick={() => onDeleteProfile(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
