import React from "react";
import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";

export default function ModalContainer({ modal, setModal }) {
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div onClick={() => setModal(null)} className="overlay-style">
        <div className="modal-style">
          <FaWindowClose
            onClick={() => setModal(null)}
            className="btn-cancel"
          />
          {modal}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
