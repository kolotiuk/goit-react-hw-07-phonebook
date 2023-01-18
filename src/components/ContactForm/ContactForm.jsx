// import PropTypes from 'prop-types';
import {
  Form,
  ButtonAddContact,
  FormLabel,
  FormInput,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/toolkit/slice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  console.log('contacts', items);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const findContactSameName = items.find(
      el => el.name === form.elements.text.value
    );

    if (findContactSameName) {
      form.reset();
      return alert(
        `this ${findContactSameName.name} is already in your contact`
      );
    }

    dispatch(addContact(form.elements.text.value, form.elements.number.value));
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <p>Name</p>
          <FormInput
            type="text"
            name="text"
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
            name="number"
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

// ContactForm.propTypes = {
//   // handleAddContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ContactForm;
