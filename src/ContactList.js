import React from "react";
import FormControl from "./FormControl";

const ContactList = ({ contacts, children, handleDelete }) => (
  <div>
    <h2>Contacts</h2>
    {children}
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}
          <FormControl label="Delete" onClick={() => handleDelete(id)}/>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
