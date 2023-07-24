import { Word } from "@/app/wordService";
import React from "react";
import WordCard from "./word-card";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: Word;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, word }) => {
  return (
    <>
      {isOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-slate-800 p-6 rounded-lg max-w-md">
            <WordCard word={word} />
            <button
              id="closeModal"
              className="bg-transparent hover:bg-slate-600 text-white font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
