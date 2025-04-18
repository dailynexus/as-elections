/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */


import React, { useState } from "react";
import PropTypes from "prop-types";

import VisibilitySensor from "react-visibility-sensor";
import ToggleQuestionnaire from "./toggle-questionnaire";

import CandidateList from "./candidate-list";


import { position, positionTitle, candidates as candidatesStyle, anchor } from "./position.module.scss";

  function Position({ title, candidates, questionData, setActive }) {
    const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
    function closeQuestionnaire() {
      setIsQuestionnaireOpen(false);
    }

    let positionID = title.replace(/ /g, '');

    function changeActive(isVisible) {
      if (isVisible) {
        setActive(positionID);
      }
    }

    let partialVisibility = true;
    let offset = { top: 200, bottom: 200 };

    return (
      <VisibilitySensor onChange={changeActive} partialVisibility={partialVisibility} intervalCheck={false}
        scrollCheck={true} scrollDelay={0} offset={offset}>
        <div className={position}>
          <span id={positionID} classsName={anchor} />
          <h2 className={positionTitle}>{title}</h2>
          <ToggleQuestionnaire isOpen={isQuestionnaireOpen}
            setIsOpen={setIsQuestionnaireOpen} text = {"View Candidates"}/>
          <CandidateList isOpen={isQuestionnaireOpen} close={closeQuestionnaire} position={title} candidateData={candidates}
            questionData={questionData} />
          {/* <div className={candidatesStyle}>
            {candidates.map((candidate) => (
              <Candidate key={candidate.name} candidateData={candidate} questionData={questionData} />
            ))}
          </div> */}
        </div>
      </VisibilitySensor>
    );
  }

  Position.propTypes = {
    title: PropTypes.string.isRequired,
    candidates: PropTypes.array.isRequired,
    questionData: PropTypes.array.isRequired,
    setActive: PropTypes.func,
  };

  export default Position
