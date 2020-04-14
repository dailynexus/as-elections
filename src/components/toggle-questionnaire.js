/**
 * Component to toggle the questionnaire display for a Candidate.
 */

import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

function ToggleQuestionnaire({ isOpen, setIsOpen }) {
  function toggleQuestionnaireOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <button className="button" onClick={toggleQuestionnaireOpen}>
      View Questionnaire
    </button>
  );
}

ToggleQuestionnaire.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ToggleQuestionnaire
