/**
 * Represents a single candidate for a position.
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ConditionalWrapper from "./conditional-wrapper";
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

  // Hacky solution to bold opening parts of each blurb paragraph
  if (candidateData.BlurbP1 !== '') {
    let candidateBlurbOpener = <strong>{candidateData.BlurbP1.substring(0, 16)}</strong>;
    candidateBlurbP1 = <p>{candidateBlurbOpener} {candidateData.BlurbP1.substring(16)}</p>;
  }
  if (candidateData.BlurbP2 !== '') {
    if (candidateData.BlurbP2.substring(0, 3) === "Non") {
      let candidateBlurbOpener = <strong>{candidateData.BlurbP2.substring(0, 16)}</strong>;
      candidateBlurbP2 = <p>{candidateBlurbOpener} {candidateData.BlurbP2.substring(16)}</p>;
    } else {
      let candidateBlurbOpener = (
        <a className={styles.endorsement} href={candidateData.interviewURL}>
          <strong>{candidateData.BlurbP2.substring(0, 12)}</strong>
        </a>
      );
      candidateBlurbP2 = <p>{candidateBlurbOpener} {candidateData.BlurbP2.substring(12)}</p>;
    }
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
        <ConditionalWrapper condition={candidateData.interviewURL}
          wrapper={(children) => <a href={candidateData.interviewURL}>{children}</a>}>
          <h3 className={styles.candidateName}>{candidateData.name}</h3>
          <h4 className={styles.candidateParty}>{candidateData.party}</h4>
          <img className={styles.candidatePortrait} src={candidateData.photoURL} />
        </ConditionalWrapper>
      </div>

      {hasQuestionnaireData && (
        <>
          <ToggleQuestionnaire isOpen={isQuestionnaireOpen}
            setIsOpen={setIsQuestionnaireOpen} />

          <Questionnaire isOpen={isQuestionnaireOpen} close={closeQuestionnaire} data={candidateData}
          questionData={questionData} />
        </>
      )}

      <div className={styles.blurb}>
        {candidateBlurbP1}
        {candidateBlurbP2}
      </div>
    </div>
  );
};

Candidate.propTypes = {
  candidateData: PropTypes.object.isRequired,
  questionData: PropTypes.object.isRequired,
};

export default Candidate
