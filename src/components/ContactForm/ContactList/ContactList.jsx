const { Component } = require('react');

export class ContactList extends Component {
  handleDeleteContact = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts, filter } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => this.handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
