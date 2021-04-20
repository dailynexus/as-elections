import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Question from "../components/question"
import QuestionMenu from "../components/question-menu"
import SEO from "../components/seo"

function QuestionsPage({ data }) {
  const [candidateData, setCandidateData] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState("");

  function elementsRemaining(arrays, i) {
    for (let key in arrays) {
      if (arrays[key].length > i) {
        return true;
      }
    }

    return false;
  }

  useEffect(() => {
    let electionPositions = [];

    data.allCandidatesCsv.nodes.forEach((node) => {
      if (electionPositions.indexOf(node.position) === -1) {
        electionPositions.push(node.position);
      }

      // Replace newlines (carriage returns) in question responses with spaces
      data.allQuestionsJson.nodes.forEach((questionNode) => {
        node[questionNode.id] = node[questionNode.id].replace(/\r/g, " "); 
      })
    });

    setActiveQuestion(data.allQuestionsJson.nodes[0].id);

    let matchingCandidatesArray = [];
    electionPositions.forEach((position) => {
      let matchingCandidates = {};

      data.allCandidatesCsv.nodes.forEach((node) => {
        if (node.position === position) {
          for (let question of data.allQuestionsJson.nodes) {
            if (node[question.id] !== '') {
              if (!(node.party in matchingCandidates)) {
                matchingCandidates[node.party] = [];
              }

              matchingCandidates[node.party].push(node);
              break;
            }
          }
        }
      });

      let i = 0;
      while (elementsRemaining(matchingCandidates, i)) {
        for (let party in matchingCandidates) {
          if (matchingCandidates[party].length > i) {
            matchingCandidatesArray.push(matchingCandidates[party][i]);
          }
        }

        i++;
      }
    });

    setCandidateData(matchingCandidatesArray);
  }, [data]);
  
  return (
    <Layout location="questions">
      <SEO title="Questions" />

      <QuestionMenu questions={data.allQuestionsJson.nodes} activeQuestion={activeQuestion} />

      <div className="content">
        <section className="questions">
          {data.allQuestionsJson.nodes.map((questionNode) => (
            <Question key={questionNode.id} data={questionNode} candidates={candidateData}
              setActive={setActiveQuestion} />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default QuestionsPage;

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
  party: Party
  photo: Photo {
    childImageSharp {
      gatsbyImageData (
        width: 500
        placeholder: BLURRED
      )
    }
  } 
  photoURL: Photo_URL
  pronouns: Pronouns
  interviewURL: Interview_URL
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
  Q11
  Q12
  Q13
  Q14
  Q15
  Q16
  Q17
  Q18
  Q19
}
`
