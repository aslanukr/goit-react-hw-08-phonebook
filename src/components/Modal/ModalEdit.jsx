import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Close, ModalLayer, Overlay } from '../Styles.styled';
import PropTypes from 'prop-types';
import { EditForm } from 'components/EditForm/EditForm';

const modalRoot = document.querySelector('#modal-root');

export default function ModalEdit({ onClose, contact }) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalLayer>
        <Close onClick={() => onClose()} />
        <EditForm onClose={onClose} contact={contact} />
      </ModalLayer>
    </Overlay>,
    modalRoot
  );
}

ModalEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
