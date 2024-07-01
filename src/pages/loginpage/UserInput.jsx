import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const UserInput = ({ type, placeholder, value, name, onChange, onEnterPress }) => {
  //엔터키 누르면 로그인
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className="user-input"
      onKeyPress={handleKeyPress}
    />
  );
};

UserInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterPress: PropTypes.func.isRequired, 
};

export default UserInput;
