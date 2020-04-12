/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */

import React from "react";
import PropTypes from "prop-types";

import Candidate from "./candidate";

import styles from "./position.module.scss";

const Position = ({ title, candidates, questionData }) => {
  return (
    <div className={styles.position}>
      <h2 className={styles.positionTitle}>{title}</h2>
      <div className={styles.candidates}>
        {candidates.map((candidate) => (
          <Candidate candidateData={candidate} questionData={questionData} />
        ))}
      </div>
    </div>
  )
};

Position.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
  questionData: PropTypes.object.isRequired,
};

export default Position
