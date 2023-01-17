import { FormInput } from 'components/ContactForm/ContactForm.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/slice';
// import { getContacts } from 'redux/selectors';

// const Filter = ({ handleChange, filter }) => {
const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <FormInput type="text" onChange={handleChange} />
      {/* <FormInput type="text" value={filter} onChange={handleChange} /> */}
    </div>
  );
};

// Filter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export default Filter;
