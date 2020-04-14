/**
 * Represents a single candidate for a position.
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Questionnaire from "./questionnaire";
import ToggleQuestionnaire from "./toggle-questionnaire";

import styles from "./candidate.module.scss";

function Candidate({ candidateData, questionData }) {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  function closeQuestionnaire() {
    setIsQuestionnaireOpen(false);
  }

  let candidateBlurbP1;
  let candidateBlurbP2;
  if (candidateData.BlurbP1 !== '' || candidateData.BlurbP2 !== '') {
    if (candidateData.BlurbP1 !== '') candidateBlurbP1 = <p>{candidateData.BlurbP1}</p>;
    if (candidateData.BlurbP2 !== '') candidateBlurbP2 = <p>{candidateData.BlurbP2}</p>;
  }

  let hasQuestionnaireData = false;
  for (let question of questionData) {
    if (candidateData[question.id] != '') {
      hasQuestionnaireData = true;
      break;
    }
  }

  return (
    <div className={styles.candidate}>
      <div className={styles.candidateInfo}>
        <h3 className={styles.candidateName}>{candidateData.name}</h3>
        <h4 className={styles.candidateParty}>{candidateData.party}</h4>
        <img className={styles.candidatePortrait} src={candidateData.photoURL} />
      </div>

      {hasQuestionnaireData && (
        <>
          <ToggleQuestionnaire isOpen={isQuestionnaireOpen}
            setIsOpen={setIsQuestionnaireOpen} />

          <Questionnaire isOpen={isQuestionnaireOpen} close={closeQuestionnaire} data={candidateData}
          questionData={questionData} />
        </>
      )}

      {candidateBlurbP1}
      {candidateBlurbP2}
    </div>
  );
};

Candidate.propTypes = {
  candidateData: PropTypes.object.isRequired,
  questionData: PropTypes.object.isRequired,
};

export default Candidate
