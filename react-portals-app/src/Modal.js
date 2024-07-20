import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <button onClick={onClose} style={closeButtonStyle}>
        Close
      </button>
      {children}
    </div>,
    document.getElementById("modal-root")
  );
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  zIndex: 1000,
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
};

export default Modal;
