import React from "react";

const ContactList = ({ contacts }) => (
  <div>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ name, number }) => (
        <li key={name}>{name} : {number}</li>
      ))}
    </ul>
  </div>
);

export default ContactList;
