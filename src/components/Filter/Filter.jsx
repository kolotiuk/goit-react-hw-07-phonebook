import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/slice';
import { FormInput } from 'components/ContactForm';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <FormInput type="text" onChange={handleChange} />
    </div>
  );
};

export default Filter;
