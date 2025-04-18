/**
 * Modal component to display a senator's responses to the CandidateList.
 */

import React, { useEffect, useRef, useState, } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import Candidate from "./candidate";

import {
  overlay, modal, modalHeader, positionInfo, positionName, candidatePosition, closeButton,
  questions, question as questionStyle, candidatesStyle, modalWrapper
}
  from "./candidate-list.module.scss";



Modal.setAppElement('#___gatsby');

function CandidateList({ isOpen, close, position, candidateData, questionData }) {

  const wrapperRef = useRef(null);
  const [overlayHeight, setOverlayHeight] = useState(0);
  const overlayRef = useRef();

  // useEffect(() => {
  //   if (isOpen && wrapperRef.current) {
  //     wrapperRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //   }
  // }, [isOpen]);


  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        // Add a small delay to ensure the modal is rendered
        const overlays = document.querySelectorAll('body .' + overlay);
        console.log("Searching for: ", 'body .' + overlay);
        console.log("Number of overlays found:", overlays.length);

        const totalPageHeight = document.documentElement.scrollHeight;

        // Set the height for each overlay
        overlays.forEach((overlay) => {
          overlay.style.height = `${totalPageHeight}px`;
        });
        if (isOpen && wrapperRef.current) {
          const modal = wrapperRef.current;
          const offset = 50; // Adjust this value to control the offset amount
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
      <Modal ref={overlayRef} overlayClassName={overlay} className={modal} htmlOpenClassName="ReactModal__Html--open" bodyOpenClassName="ReactModal__Body--open"
        ariaHideApp={false}
        closeTimeoutMS={200}
        isOpen={isOpen} onRequestClose={close}>
        <div className={modalHeader}>
          <div className={positionInfo}>
            <div className={positionName}>{position}</div>
          </div>
          <button className={closeButton} onClick={close}>
            <FontAwesomeIcon icon="times" color="#22424F" />
          </button>
        </div>
        <div className={candidatesStyle}>
          {candidateData.map((candidate) => (
            <Candidate key={candidate.name} candidateData={candidate} questionData={questionData} />
          ))}
        </div>

        {/* <div className={questions}>
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
      </div> */}
      </Modal>
    </div>
  );
}

CandidateList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  questionData: PropTypes.array.isRequired,
};

export default CandidateList
