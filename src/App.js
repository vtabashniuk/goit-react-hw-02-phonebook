import React, { Component } from "react";
import Section from "./Section";
import Form from "./Form";
import ContactList from "./ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handlerFilter = (searchedValue) => {
    const filter = searchedValue.target.value.toLowerCase();
    this.setState({ filter });
  };

  handlerFormSubmit = (data) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
      ...data,
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <>
        <h1>Homework 2</h1>
        <Section title="Task 2.2 Phonebook">
          <Form onSubmit={this.handlerFormSubmit} />
          {this.state.contacts.length > 0 && (
            <ContactList
              handlerFilter={this.handlerFilter}
              contacts={
                this.state.filter.length > 0
                  ? filteredContacts :
                   this.state.contacts
              }
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
