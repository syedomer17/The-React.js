import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className='"bg-white p-6 rounded shadow-lg relative'>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
