import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const UserInput = ({ type, placeholder, value, name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className="user-input"
    />
  );
};

UserInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UserInput;
