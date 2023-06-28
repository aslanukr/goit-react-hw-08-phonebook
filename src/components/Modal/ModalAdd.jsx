import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Close, ModalLayer, Overlay } from '../Styles.styled';
import PropTypes from 'prop-types';
import { ContactForm } from 'components/ContactForm/ContactForm';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAdd({ onClose }) {
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
        <ContactForm onClose={onClose} />
      </ModalLayer>
    </Overlay>,
    modalRoot
  );
}

ModalAdd.propTypes = {
  onClose: PropTypes.func.isRequired,
};
