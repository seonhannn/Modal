import React, { useState } from 'react';
import Modal from './Modal';

function ModalView() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal}>
        모달 내용
      </Modal>
    </div>
  );
}

export default TestModal;
