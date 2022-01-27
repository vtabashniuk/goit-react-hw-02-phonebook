import React from "react";

const ContactList = ({contacts, children}) => (
  <div>
    <h2>Contacts</h2>
    {children}
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
