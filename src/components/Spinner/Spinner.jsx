import { Radio } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Radio
        visible={true}
        height="80"
        width="80"
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass="radio-wrapper"
      />
    </div>
  );
};

export default Spinner;
