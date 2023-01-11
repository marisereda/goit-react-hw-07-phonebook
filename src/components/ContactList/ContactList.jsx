import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Contact } from 'components/Contact';
import { List } from './ContactList.styled';
import { selectContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  // let firstRendering = useRef(true);

  // --------------------------------
  useEffect(() => {
    // if (firstRendering.current) {
    //   firstRendering.current = false;
    //   return;
    // }
    dispatch(fetchContacts());
  }, [dispatch]);

  // --------------------------------
  const getFilteredContacts = () => {
    return filterValue
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contacts;
  };

  // --------------------------------
  return (
    <List>
      {getFilteredContacts().map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};
