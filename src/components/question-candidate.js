/**
 * Represents a single candidate's response to a single question.
 */

import React from "react";
import PropTypes from "prop-types";

import {candidate, portraitWrapper, portrait, text, candidateInfo, name, extraInfo} 
  from "./question-candidate.module.scss";

function QuestionCandidate({ candidateData, questionID }) {
  return (
    <div className={candidate}>
      <div className={portraitWrapper}>
        <img className={portrait} alt={"Portrait of " + candidateData.name} src={candidateData.photoURL} />
      </div>
      <div className={text}>
        <div className={candidateInfo}>
          <h3 className={name}>{candidateData.name}</h3>
          <h4 className={extraInfo}>{candidateData.position}</h4>
          <h4 className={extraInfo}>{candidateData.party}</h4>
        </div>

        <p>
          {candidateData[questionID]}
        </p>
      </div>
    </div>
  );
}

QuestionCandidate.propTypes = {
  candidateData: PropTypes.object.isRequired,
  questionID: PropTypes.string.isRequired,
}

export default QuestionCandidate;
