import {
  Form,
  ButtonAddContact,
  FormLabel,
  FormInput,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operationsContacts';
import { getContacts } from 'redux/selectors';
import { useState } from 'react';

const ContactForm = () => {
  const [userValue, setUserValue] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const handleChangeInput = ({ target: { value, name } }) => {
    setUserValue({ ...userValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const findContactSameName = items.find(el => {
      return el.name.toUpperCase() === form.name.value.toUpperCase();
    });
    if (findContactSameName) {
      form.reset();
      return alert(`${findContactSameName.name} is already in your contact`);
    }

    dispatch(addContact(userValue));
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <p>Name</p>
          <FormInput
            type="text"
            name="name"
            onChange={handleChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter contact name..."
            required
          />
        </FormLabel>
        <FormLabel>
          <p>Number</p>
          <FormInput
            type="tel"
            name="phone"
            onChange={handleChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter contact phone..."
            required
          />
        </FormLabel>
        <ButtonAddContact>Add contact</ButtonAddContact>
      </Form>
    </div>
  );
};

export default ContactForm;
