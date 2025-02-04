"use client";
import React, { useEffect, useRef } from "react";

export const Modal = ({ open, onClose, children }: any) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e:any) => {
      if (e.target === modalRef.current) {
        onClose();
      }
    };
  
    window.addEventListener("click", handleClick);
  
    return () => {
      window.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={modalRef}
      className={`fixed inset-0 z-40 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/70" : "invisible"
      }`}
    >
      <div
        className={`bg-white w-3/4 rounded shadow p-4 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
};
