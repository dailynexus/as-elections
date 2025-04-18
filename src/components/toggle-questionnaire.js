/**
 * Component to toggle the questionnaire display for a Candidate.
 */

import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

function ToggleQuestionnaire({ isOpen, setIsOpen, text}) {
  function toggleQuestionnaireOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <button className={text === "View Candidates" ? "button" : "button-alt"} onClick={toggleQuestionnaireOpen}>
      {text}
    </button>
  );
}

ToggleQuestionnaire.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ToggleQuestionnaire
