import React, { Component } from "react";
import Section from "./Section";
import Form from "./Form";
import ContactList from "./ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: ""
  };

  handlerFormSubmit = (data) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
      ...data,
    }));
  };

  render() {
    return (
      <>
        <h1>Homework 2</h1>
        <Section title="Task 2.2 Phonebook">
          <Form onSubmit={this.handlerFormSubmit} />
          {this.state.contacts.length > 0 && <ContactList contacts={this.state.contacts} />}
        </Section>
      </>
    );
  }
}

export default App;
