import React from 'react';
import PropTypes from 'prop-types';
import './modal_admin.css';

// 상세 정보 페이지
const DetailModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="adminModal-page">
      <div className="adminModal">
        <button className="adminModal-Btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

DetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default DetailModal;