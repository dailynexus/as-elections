/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */

import React from "react";
import PropTypes from "prop-types";

import styles from "./position.module.scss";
import Candidate from "./candidate";

const Position = ({ title, candidates }) => {
  return (
    <div className="position">
      <h2 className={styles.positionTitle}>{title}</h2>
      <div className={styles.candidates}>
        {candidates.map((candidate) => (
          <Candidate candidateData={candidate} />
        ))}
      </div>
    </div>
  )
};

Position.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
};

export default Position
