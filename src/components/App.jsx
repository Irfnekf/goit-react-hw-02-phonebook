import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './modules/ContactsForm/ContactsForm';
import ContactsList from './modules/ContactsList/ContactsList';
import ContactsFilter from './modules/ContactsFilter/ContactsFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return { contacts: newContacts };
    });
  };

  addContact = ({ name, number }) => {
    if (this.isDublicate(name, number)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
    return true;
  };

  isDublicate(name, number) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;

    const contactDubl = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(contactDubl);
  }

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  getFilteredContacts() {
    const { filter, contacts } = this.state;

    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  }

  render() {
    const { addContact, removeContact, handleFilter } = this;
    const contacts = this.getFilteredContacts();
    const isContact = Boolean(contacts.length);

    return (
      <>
        <div>
          <ContactsForm onSubmit={addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactsFilter handleChange={handleFilter} />
          {isContact && (
            <ContactsList removeContact={removeContact} contacts={contacts} />
          )}
          {!isContact && <p>No contacts in list</p>}
        </div>
      </>
    );
  }
}
