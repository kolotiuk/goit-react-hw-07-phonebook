import { useSelector } from 'react-redux';
import { selectErrorContacts } from 'redux/selectors/';
import { ErrorRequest } from './Error.styled';

const Error = () => {
  const isError = useSelector(selectErrorContacts);
  
  return (
    <div>
      <ErrorRequest>{isError}</ErrorRequest>
    </div>
  );
};

export default Error;
