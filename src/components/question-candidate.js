/**
 * Represents a single candidate's response to a single question.
 */

import React from "react";
import PropTypes from "prop-types";

import styles from "./question-candidate.module.scss";

function QuestionCandidate({ candidateData, questionID }) {
  return (
    <div className={styles.candidate}>
      <img className={styles.portrait} alt={"Portrait of " + candidateData.name} src={candidateData.photoURL} />
      <div className={styles.text}>
        <div className={styles.candidateInfo}>
          <h3 className={styles.name}>{candidateData.name}</h3>
          <h4 className={styles.extraInfo}>{candidateData.position}</h4>
          <h4 className={styles.extraInfo}>{candidateData.party}</h4>
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
