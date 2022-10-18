import React from "react";
import { BsPersonLinesFill } from 'react-icons/bs' 

export default function PdfModal() {

  let [showModal, setShowModal] = React.useState(false);

  return (
    <>
    <BsPersonLinesFill 
        onClick={() => setShowModal(true)}
    />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-5/6 h-5/6 bg-white outline-none focus:outline-none">
              <iframe src='resume.pdf' className="h-full aspect-video" />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}