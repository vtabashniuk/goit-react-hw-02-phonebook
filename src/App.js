import React, { Component } from "react";
import Section from "./Section";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleFilter = (searchedValue) => {
    const filter = searchedValue.target.value.toLowerCase();
    this.setState({ filter });
  };

  duplicateCheck = (data) => {
    const isDuplicate = false;
    if (this.state.contacts.find((item) => item.name === data.name)) {
      alert(`Contact with name: ${data.name} already exists`);
      return !isDuplicate;
    }
    return isDuplicate;
  };

  handleFormSubmit = (data) => {
    if (!this.duplicateCheck(data)) {
      const id = nanoid();
      const contactItem = { id, ...data };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contactItem],
      }));
    }
  };

  handleDelete = (id) => {
    const clearedContactList = this.state.contacts.filter(item => item.id !== id);
    this.setState({ contacts: [...clearedContactList] });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <>
        <h1 className="title">Homework 2</h1>
        <Section title="Task 2.2 Phonebook">
          <Form onSubmit={this.handleFormSubmit} />
          {this.state.contacts.length > 0 && (
            <ContactList
              contacts={
                this.state.filter.length > 0
                  ? filteredContacts
                  : this.state.contacts
              }
              handleDelete={this.handleDelete}
            >
              <Filter handleFilter={this.handleFilter} />
            </ContactList>
          )}
        </Section>
      </>
    );
  }
}

export default App;
