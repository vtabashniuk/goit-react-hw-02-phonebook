import React, { Component } from "react";
import FormControl from "./FormControl";

const INITIAL_STATE = { name: "" };

class Form extends Component {
  state = {};

  handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.hasOwnProperty("name") ? this.state.name : ""}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            onChange={handleChange}
            required
          ></input>
        </label>
        <FormControl label="Add Contact" />
      </form>
    );
  }
}

export default Form;
