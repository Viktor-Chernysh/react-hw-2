import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/Form/ContactForm";
import ContactList from "./components/Contacts/ContactList ";
import Filter from "./components/Filter/Filter";
import "./App.css";

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

  handleSubmit = (data) => {
    const check = this.state.contacts.find((el) =>
      el.name.toLowerCase().includes(data.name.toLowerCase())
    );
    if (check) {
      return alert(`${data.name} is already in contacts`);
    }
    this.setState((prevState) => ({
      contacts: [{ ...data, id: nanoid() }, ...prevState.contacts],
    }));
  };

  handleDelete = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== id),
    });
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} value={filter} />
        {this.state.contacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.handleDelete}
          />
        ) : (
          <p>There is no contacts yet!</p>
        )}
      </div>
    );
  }
}

export default App;
