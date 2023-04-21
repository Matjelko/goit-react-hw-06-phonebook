import './ContactListItem.css'
import PropTypes from 'prop-types';

const ContactListItem = ({ onDeleteContact, id, name, number }) => {
    const handleDelete = () => {
        onDeleteContact(id);
    }

    return(
        <li className="contactListItem__unordered-list--item">
            {name}: {number}
            <button className="contactListItem__unordered-list--button" onClick={handleDelete}>Delete</button>
        </li>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    handleDelete: PropTypes.func
}

export default ContactListItem