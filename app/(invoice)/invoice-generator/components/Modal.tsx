import React from "react";

const Modal = ({ open, onClose, children }: any) => {
  return (
    <div
      id="modal"
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all ${
        open ? "visible bg-black/70" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-3/4 rounded-lg bg-white p-8 shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button onClick={onClose} className="absolute right-2 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-black/60 hover:text-black"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
