/**
 * Modal component to display a senator's responses to the questionnaire.
 */

import React, { useEffect, useRef, useState, } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';

import {
  overlay, modal, modalHeader, candidateInfo, candidateName, candidatePosition, closeButton,
  questions, question as questionStyle, modalWrapper
}
  from "./questionnaire.module.scss";

Modal.setAppElement('#___gatsby');


function Questionnaire({ isOpen, close, data, questionData }) {

  const wrapperRef = useRef(null);
    const [overlayHeight, setOverlayHeight] = useState(0);
    const overlayRef = useRef();


  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        // Add a small delay to ensure the modal is rendered
        const overlays = document.querySelectorAll('body .' + CSS.escape(overlay));
        console.log("Searching 2 for: ", 'body .' + overlay);
        console.log("Number of overlays found:", overlays.length);

        const totalPageHeight = document.documentElement.scrollHeight;

        // Set the height for each overlay
        overlays.forEach((overlay) => {
          overlay.style.height = `${totalPageHeight}px`;
        });
        if (isOpen && wrapperRef.current) {
          const modal = wrapperRef.current;
          const offset = 10; // Adjust this value to control the offset amount
          const modalTop = modal.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: modalTop - offset, // Adjust the scroll position by subtracting the offset
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className={modalWrapper}>
    <Modal overlayClassName={overlay} className={modal} htmlOpenClassName="ReactModal__Html--open"
      closeTimeoutMS={200}
      isOpen={isOpen} onRequestClose={close}>
      <div className={modalHeader}>
        <div className={candidateInfo}>
          <div className={candidateName}>{data.name}</div>
          <div className={candidatePosition}>{data.position}</div>
        </div>
        <button className={closeButton} onClick={close}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>

      <div className={questions}>
        {questionData.map((question) => {
          let questionPrefix = question.id.substring(1) + ".";
          let questionText = question.question;
          let questionAnswer = data[question.id];

          return (
            <div className={questionStyle} key={question.id}>
              <h3>{questionPrefix} {questionText}</h3>
              <div>{questionAnswer}</div>
            </div>
          );
        })}
      </div>
    </Modal>
    </div >
  );
}

Questionnaire.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  questionData: PropTypes.array.isRequired,
};

export default Questionnaire
