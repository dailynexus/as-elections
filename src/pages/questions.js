import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Question from "../components/question"
import QuestionMenu from "../components/question-menu"
import SEO from "../components/seo"

function QuestionsPage({ data }) {
  const [candidateData, setCandidateData] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState("");

  useEffect(() => {
    data.allCandidatesCsv.nodes.forEach((node) => {
      // Replace newlines (carriage returns) in question responses with spaces
      data.allQuestionsJson.nodes.forEach((questionNode) => {
        node[questionNode.id] = node[questionNode.id].replace(/\r/g, " "); 
      })
    });

    setActiveQuestion(data.allQuestionsJson.nodes[0].id);

    // Previously when grouping the candidates by position, we also needed to divide the candidates by party, so
    // that we could alternate between parties when displaying the candidates for a given position.
    // If for some reason senators run under parties again in the future, look at previous commits to see how to do it.
    // You could probably just replace the sort below with a manual "sort" that first groups them by position, then
    // alternates between parties within that position.

    // First: Check for candidates with an answer to any questionnaire question (to avoid including executives & people who didn't answer the questionnaire at all)
    // Second: Sort the candidates by position so competing senators are displayed next to each other
    let newCandidateData = data.allCandidatesCsv.nodes.filter(candidate => {
      for (let question of data.allQuestionsJson.nodes) {
        // candidate had a non-empty response to this question
        if (candidate[question.id] !== '') {
          return true;
        }
      }

      return false;
    }).sort((a, b) => a.position.localeCompare(b.position));

    setCandidateData(newCandidateData);
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
  photo: Photo {
    childImageSharp {
      gatsbyImageData (
        height: 500
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
