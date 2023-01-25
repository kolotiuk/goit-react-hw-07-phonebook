import { useSelector } from 'react-redux';
import { ErrorRequest } from './Error.styled';
import { selectErrorContacts } from 'redux/selectors/';

const Error = () => {
  const isError = useSelector(selectErrorContacts);
  return (
    <div>
      <ErrorRequest>{isError}</ErrorRequest>
    </div>
  );
};

export default Error;
