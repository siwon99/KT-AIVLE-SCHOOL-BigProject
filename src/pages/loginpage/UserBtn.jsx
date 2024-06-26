import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const UserBtn = ({ disabled, onClick }) => {
  return (
    <button
      className="user-button"
      disabled={disabled}
      onClick={onClick}
    >
      로그인
    </button>
  );
};

UserBtn.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

UserBtn.defaultProps = {
  disabled: false,
};

export default UserBtn;