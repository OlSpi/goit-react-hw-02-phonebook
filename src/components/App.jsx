import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactForm/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
      <div>
        <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.addContact} />
        </div>

        <div>
          <h2>Contacts</h2>
          <Filter filter={this.filter} onChange={this.handleFilterChange} />

          <ul>
            <ContactList
              contacts={contacts}
              filter={filter}
              onDeleteContact={this.deleteContact}
            />
          </ul>
        </div>
      </div>
    );
  }
}
