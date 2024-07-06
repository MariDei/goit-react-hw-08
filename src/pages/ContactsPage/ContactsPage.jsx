import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <Toaster position="top-center" reverseOrder={false} />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
