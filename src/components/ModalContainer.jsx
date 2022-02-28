import React from 'react';
import ReactDom from 'react-dom';
import { FaWindowClose } from 'react-icons/fa';

export default function ModalContainer({ modal, setModal }) {
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div onClick={() => setModal(null)}></div>
      <div className="modal-card-view ">
        <FaWindowClose onClick={() => setModal(null)} />
        {modal}
      </div>
    </>,
    document.getElementById('modal')
  );
}