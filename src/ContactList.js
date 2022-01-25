import React from "react";

const ContactList = ({ contacts }) => (
  <div>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </div>
);

export default ContactList;
