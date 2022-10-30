import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const INITIAL_STATE = { name: '', number: '' };

class ContactForm extends Component {
  static propTypes = {
    handleAddContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleAddContact({ ...this.state, id: uuid() });
    this.reset();
  };

  handleInputValue = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleInputValue } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input
              onChange={handleInputValue}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <p>Number</p>
            <input
              onChange={handleInputValue}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
