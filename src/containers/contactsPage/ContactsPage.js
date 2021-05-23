import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // Receive two props: current list of contacts and function for adding a new contact
  // Keep track of current name, phone and email
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // Track a duplicate name
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Check for duplicates whenever the name in form changes
  useEffect(() => {
    if (contacts.some(contact => contact.name === name)) {
      setIsDuplicate(true);
    }
  }, [name, contacts]);

  // Add contact info and clear data if name is not a duplicate
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isDuplicate) {
      window.alert(`Name: ${name} is already in the contacts list!`);
      setIsDuplicate(false);
    }
    else {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div className="flex-container">
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts}/>
      </section>
    </div>
  );
};
