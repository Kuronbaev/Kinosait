import React from "react";
import { GrClose } from "react-icons/gr";
const Modal = ({ details, isModalOpen, onClose }) => {
  return (
    <div
      style={{
        transition: "all .4s",
        transform: `scale(${isModalOpen ? "1" : "0"})`,
      }}
      className="modal"
    >
      <div className="modal-content relative w-full h-full">
        <img
          className="w-[504px] h-full object-cover"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details.poster_path}`}
          alt=""
        />
        z
        <GrClose
          onClick={onClose}
          className=" text-2xl absolute top-2 right-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Modal;
