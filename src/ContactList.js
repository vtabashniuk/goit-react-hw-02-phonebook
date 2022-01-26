import React from "react";

const ContactList = ({handlerFilter, contacts}) => (
      <div>
    <h2>Contacts</h2>
        <label htmlFor="searchInput">Find contact by name</label>
        <input id="searchInput" type="search" autoComplete="off" onChange={handlerFilter}></input>
        <ul>
          {contacts.map(({ name, number }) => (
            <li key={name}>
              {name} : {number}
            </li>
          ))}
        </ul>
      </div>
    );

export default ContactList;
