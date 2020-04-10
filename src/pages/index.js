import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Position from "../components/position"

const IndexPage = ({ data }) => {
  var electionPositions = [];
  data.allCandidatesCsv.nodes.forEach((node) => {
    if (electionPositions.indexOf(node.position) === -1) {
      electionPositions.push(node.position);
    }
  });

  return (
    <Layout>
      <SEO title="Home" />

      <div className="content">
        <div className="menu" />

        <section className="candidates">
          {electionPositions.map((position) => {
            let matchingCandidates = [];
            data.allCandidatesCsv.nodes.forEach((node) => {
              if (node.position === position) {
                matchingCandidates.push(node);
              }
            });

            return (
              <Position key={position} title={position} candidates={matchingCandidates} />
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
  allCandidatesCsv {
    nodes {
      ...candidateFields
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
}
`
