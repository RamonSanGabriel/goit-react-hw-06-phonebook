// import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilter } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  /*   const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  );
  const [filter, setFilter] = useState(''); */

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  /*   useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); */

  const handleAddContact = newContact => {
    // setContacts(prevContacts => [...prevContacts, newContact]);
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    /*   setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    ); */ //filter() method creates a new array with all elements that pass the test implemented by a provided function
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  /* 
  const filterLowerCase = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLowerCase)
  ); */

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filteredContacts} setFilter={handleSetFilter} />
      <ContactList
        filterContact={handleSetFilter}
        deleteContact={handleDeleteContact}
        contacts={contacts}
      />
    </div>
  );
};
