import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert('This name is already in contacts');
      return;
    }

    const newContacts = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState({ contacts: [...contacts, newContacts] });
    this.setState({ name: '', number: '' });
  };

  handleFilterChange = filter => {
    this.setState({ filter: filter });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.container}>
        <div className={css.section}>
          <h2 className={css.title}>Phonebook</h2>
          <ContactForm onSubmit={this.addContact} />
        </div>

        <div className={css.section}>
          <h2 className={css.title}>Contacts</h2>
          <Filter filter={this.filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
