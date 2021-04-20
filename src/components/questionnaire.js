/**
 * Modal component to display a senator's responses to the questionnaire.
 */

import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';

import {overlay, modal, modalHeader, closeButton, question as questionStyle} from "./questionnaire.module.scss";

Modal.setAppElement('#___gatsby');

function Questionnaire({ isOpen, close, data, questionData }) {
  return (
    <Modal overlayClassName={overlay} className={modal} htmlOpenClassName="ReactModal__Html--open"
      closeTimeoutMS={200}
      isOpen={isOpen} onRequestClose={close}>
      <div className={modalHeader}>
        <button className={closeButton} onClick={close}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>

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
    </Modal>
  );
}

Questionnaire.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  questionData: PropTypes.array.isRequired,
};

export default Questionnaire
