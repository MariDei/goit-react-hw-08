import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {isLoading && !error && <Loader />}
        {error && <ErrorMessage />}
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
