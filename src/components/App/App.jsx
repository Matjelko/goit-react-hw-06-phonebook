import { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import PropTypes from "prop-types";
import '../../index.css';

const App = () => {
  const [ contacts, setContacts ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect (() => {
    const savedContacts = localStorage.getItem("contacts");
    if(savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  const handleAddContact = (contact) => {
    let switching = false;

    contacts.forEach(el => {
      if(el.name.toLowerCase() === contact.name.toLowerCase()){
        switching = true
      }
    })

    if(switching){
      alert(`${contact.name} is already in contacts.`)
    }
    else{
      setContacts((prevState) => [...prevState, contact])
    }
  }

  const handleDeleteContact = (id) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== id))
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return(
    <div className="container">
      <h1 className="header--phonebook">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
    
      <h2 className="header-contacts">Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact}/>
    </div>
  )
}

App.propTypes = {
  handleFilterChange: PropTypes.func,
  handleAddContact: PropTypes.func,
  handleDeleteContact: PropTypes.func,
  filteredContacts: PropTypes.func
}

export default App;
