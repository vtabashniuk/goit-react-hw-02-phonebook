import React from "react";

const ContactList = ({ contacts }) => (
  <div>
    <h2>Contacts</h2>
    <label htmlFor="searchInput">Find contact by name</label>
    <input id="searchInput" type="text" autoComplete="off"></input>
    <ul>
      {contacts.map(({ name, number }) => (
        <li key={name}>{name} : {number}</li>
      ))}
    </ul>
  </div>
);

export default ContactList;
