/**
 * Represents a single candidate for a position.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./candidate.module.scss";

function Candidate({ candidateData }) {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  let candidateBlurbP1;
  let candidateBlurbP2;
  if (candidateData.BlurbP1 !== '' || candidateData.BlurbP2 !== '') {
    if (candidateData.BlurbP1 !== '') candidateBlurbP1 = <p>{candidateData.BlurbP1}</p>;
    if (candidateData.BlurbP2 !== '') candidateBlurbP2 = <p>{candidateData.BlurbP2}</p>;
  }

  return (
    <div className={styles.candidate}>
      <div className={styles.candidateInfo}>
        <h3 className={styles.candidateName}>{candidateData.name}</h3>
        <h4 className={styles.candidateParty}>{candidateData.party}</h4>
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
