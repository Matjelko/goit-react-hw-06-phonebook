import { useState } from "react";
import { nanoid } from 'nanoid';
import './ContactForm.css'
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    };

    const handleNumberChange = (evt) => {
        setNumber(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddContact({ name, number, id: nanoid() })
        setName('');
        setNumber('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <p className="contactForm__paragraph">Name</p>
            <input
                className = "contactForm__input"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleNameChange}
            />
            <p className="contactForm__paragraph--number">Number</p>
            <input
                className = "contactForm__input"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleNumberChange}
            />
            <button className="contactForm__button" type="submit">Add Contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func,
    handleNameChange: PropTypes.func,
    handleNumberChange: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default ContactForm