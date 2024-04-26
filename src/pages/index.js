import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/menu"
import Position from "../components/position"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [electionPositions, setElectionPositions] = useState([]);
  const [activePosition, setActivePosition] = useState("");
  const [positionCandidates, setPositionCandidates] = useState({});

  useEffect(() => {
    let electionPositionsUpdated = [];

    data.allCandidatesCsv.nodes.forEach((node) => {
      if (electionPositionsUpdated.indexOf(node.position) === -1) {
        electionPositionsUpdated.push(node.position);
      }

      // Replace newlines (carriage returns) in question responses with spaces
      data.allQuestionsJson.nodes.forEach((questionNode) => {
        node[questionNode.id] = node[questionNode.id].replace(/\r/g, " "); 
      })
    });

    setElectionPositions(electionPositionsUpdated);
    let initialPositionID = electionPositionsUpdated[0].replace(/ /g, '');
    setActivePosition(initialPositionID);

    let positionCandidatesNew = {};
    electionPositionsUpdated.map((position) => {
      // Previously when grouping the candidates by position, we also needed to divide the candidates by party, so
      // that we could alternate between parties when displaying the candidates for a given position.
      // If for some reason senators run under parties again in the future, look at previous commits to see how to do it.
      let matchingCandidates = data.allCandidatesCsv.nodes.filter(candidate => candidate.position === position) ;
      positionCandidatesNew[position] = matchingCandidates;
    });
    setPositionCandidates(positionCandidatesNew);
  }, [data]);

  function elementsRemaining(arrays, i) {
    for (let key in arrays) {
      if (arrays[key].length > i) {
        return true;
      }
    }

    return false;
  }

  return (
    <Layout location="/">
      <SEO title="Home" />

      <Menu positions={electionPositions} activePosition={activePosition} setActivePosition={setActivePosition} />

      <div className="content">
        <section className="candidates">
          {electionPositions.map((position) => {
            return (
              <Position key={position} title={position} candidates={positionCandidates[position]} questionData={data.allQuestionsJson.nodes}
                setActive={setActivePosition} />
            );
          })}
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allCandidatesCsv(filter: {Running_For: {ne: ""}}) {
    nodes {
      ...candidateFields
    }
  }

  allQuestionsJson {
    nodes {
      id
      question
    }
  }

  site {
    siteMetadata {
      title
    }
  }
}

fragment candidateFields on CandidatesCsv {
  id
  position: Running_For
  name: Name
  photo: Photo {
    childImageSharp {
      gatsbyImageData(
        height: 500,
        placeholder: BLURRED
      )
    }
  } 
  photoURL: Photo_URL
  pronouns: Pronouns
  interviewURL: Endorsement_URL
  year: Year
  major: Major
  BlurbP1
  BlurbP2
  Q1
  Q2
  Q3
  Q4
  Q5
  Q6
  Q7
  Q8
  Q9
  Q10
  Q10a
  Q11
  Q11a
  Q12
  Q13
  Q14
  Q15
  Q16
  Q17
}
`
