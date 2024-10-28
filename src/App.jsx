import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import initialContacts from "../contacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const stringifiedUsers = localStorage.getItem("contacts");
    const parsedUser = JSON.parse(stringifiedUsers) ?? initialContacts;
    return parsedUser;
  });

  const onAddContact = (formData) => {
    const duplicate = contacts.some(
      (contact) => contact.name === formData.name
    );
    if (duplicate) {
      alert("Contact already exists!");
      return;
    }
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prev) => [...prev, finalUser]);
  };

  const onDeleteProfile = (profileId) => {
    const updateUsers = contacts.filter((contact) => contact.id !== profileId);
    setContacts(updateUsers);
  };

  const filteredUsers = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {
    const stringifiedUsers = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedUsers);
  }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox setFilter={setFilter} filter={filter} />
        <ContactList
          filteredUsers={filteredUsers}
          onDeleteProfile={onDeleteProfile}
        />
      </div>
    </>
  );
}

export default App;
