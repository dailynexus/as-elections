/**
 * Represents a single candidate for a position.
 */

import React from "react";
import PropTypes from "prop-types";

import styles from "./candidate.module.scss";

const Candidate = ({ candidateData }) => {
  let candidateBlurbP1;
  let candidateBlurbP2;
  if (candidateData.BlurbP1 !== '' || candidateData.BlurbP2 !== '') {
    if (candidateData.BlurbP1 !== '') candidateBlurbP1 = <p>{candidateData.BlurbP1}</p>;
    if (candidateData.BlurbP2 !== '') candidateBlurbP2 = <p>{candidateData.BlurbP2}</p>;
  }

  return (
    <div className={styles.candidate}>
      <div className="candidate-basic-info">
        <div className="candidate-name">{candidateData.name}</div>
        <div className="candidate-party">{candidateData.party}</div>
        <img className="candidate-portrait" src={candidateData.photoURL} />
      </div>
      {candidateBlurbP1}
      {candidateBlurbP2}
    </div>
  );
};

Candidate.propTypes = {
  candidateData: PropTypes.object.isRequired,
};

export default Candidate
