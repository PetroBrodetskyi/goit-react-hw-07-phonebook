import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactReducer';
import css from "./ContactList.module.css";
import { AiFillCloseSquare } from "react-icons/ai";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contFilter = [...getFilteredContacts()].reverse();
  return (
    <div className={css.contactlistform}>
      <ul className={css.linone}>
        {contFilter.map((contact) => (
          <li className={css.liflex} key={contact.id}>
            <div className={css.divflex}>{contact.name}: {contact.number}</div>
            <div className={css.contactlistbutton} onClick={() => handleDelete(contact.id)}><AiFillCloseSquare className={css.iconcontacts}/></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
