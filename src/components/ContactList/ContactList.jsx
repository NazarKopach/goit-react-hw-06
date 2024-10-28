import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredUsers, onDeleteProfile }) => {
  return (
    <>
      <ul className={styles.list}>
        {filteredUsers.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteProfile={onDeleteProfile}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
