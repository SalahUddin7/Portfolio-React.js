import React, { useState } from 'react';
import Modal from './Modal';

const Button_Styles = {
  prosition: 'relative',
  zIndex: 1,
};

const Other_Styles = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px',
};

export default function ReactPortal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sec">
      <div style={Button_Styles}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Testing Modal
        </Modal>
      </div>

      <div style={Other_Styles}>Other Content</div>
    </div>
  );
}
