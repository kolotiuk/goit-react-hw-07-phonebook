import { FormInput } from 'components/ContactForm/ContactForm.styled';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice';

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

// Filter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export default Filter;
