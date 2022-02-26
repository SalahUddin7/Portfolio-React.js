import React from 'react';
import ReactDom from 'react-dom';

const modal_style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'FFF',
  padding: '50px',
  zIndex: 1000,
};

const overlay_style = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  backgroundColor: 'red',
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={overlay_style}></div>
      <div style={modal_style}>
        <button onClick={onClose}>Close Modal</button>
        <h1>Image</h1>
        <h1>Data</h1>
        <h1>Price</h1>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}
