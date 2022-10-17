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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-5/6 bg-white outline-none focus:outline-none">
                {/* <div className="relative p-6 flex-auto"> */}

                    <iframe src='resume.pdf' class="w-full aspect-video" />
                {/* </div> */}
                {/* <div className="flex items-center justify-end border-t border-solid rounded-b">
                  <button
                    className="text-sky-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}