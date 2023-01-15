// import { useState } from 'react';
// import { v4 as uuid } from 'uuid';
// import PropTypes from 'prop-types';
import {
  Form,
  ButtonAddContact,
  FormLabel,
  FormInput,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from './../../redux/actions';

// const INITIAL_STATE = { name: '', number: '' };

const ContactForm = () => {
  const dispatch = useDispatch();

  // const [name, setName] = useState(INITIAL_STATE.name);
  // const [number, setNumber] = useState(INITIAL_STATE.number);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // console.log('form', form.elements.number.value);

    // handleAddContact({ name, number, id: uuid() });
    dispatch(addContact(form.elements.text.value, form.elements.number.value));
    form.reset();
    // reset();
  };

  // const handleInputValue = e => {
  //   const { name, value } = e.target;
  //   if (name === 'name') return setName(value);
  //   if (name === 'number') return setNumber(value);
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <p>Name</p>
          <FormInput
            // onChange={handleInputValue}
            type="text"
            name="text"
            // name="name"
            // value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter contact name..."
            required
          />
        </FormLabel>
        <FormLabel>
          <p>Number</p>
          <FormInput
            // onChange={handleInputValue}
            type="tel"
            name="number"
            // value={number}
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
//   handleAddContact: PropTypes.func.isRequired,
// };

export default ContactForm;
