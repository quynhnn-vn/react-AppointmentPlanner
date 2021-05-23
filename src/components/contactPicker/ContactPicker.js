import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  // Render a drop-down list of all contact names
  return (
    <select onChange={onChange}>
      <option value="default" key="default" selected="selected">
        No Contact
      </option>
      {contacts.map((contact, index) => {
        return (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
