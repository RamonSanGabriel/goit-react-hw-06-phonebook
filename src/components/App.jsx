// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedContact, deleteContact } from '../redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { setFilter } from '../redux/filterSlice';
import { getContacts, getFilter } from '../redux/selector';
// import { setFilter } from '../redux/actionsSlice';
import { ContactList } from './ContactList/ContactList';

/* const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]; */

export const App = () => {
  /*   const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  ); */
  // const [filter, setFilter] = useState('');
  /* 
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); */

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addedContact(newContact));
  };
  // setContacts(prevContacts => [...prevContacts, newContact]);
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  /*   setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );  */ //filter() method creates a new array with all elements that pass the test implemented by a provided function
  const handleFilterContact = newFilter => {
    dispatch(setFilter(newFilter));
  };
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterContact} />
      <ContactList
        filterContact={filterContact}
        deleteContact={handleDeleteContact}
        contacts={contacts}
      />
    </div>
  );
};
