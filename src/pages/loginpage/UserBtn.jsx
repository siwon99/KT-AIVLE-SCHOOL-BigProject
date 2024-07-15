import React from 'react';
import PropTypes from 'prop-types';

const UserBtn = ({ text = '로그인', disabled = false, onClick }) => {
  return (
    <button
      className="user-button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

UserBtn.propTypes = {
  text: PropTypes.string, 
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default UserBtn;