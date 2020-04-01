import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Position from "../components/position"

const IndexPage = ({ data }) => {
  var electionPositions = [];
  data.allCandidatesCsv.edges.forEach(({ node }) => {
    if (electionPositions.indexOf(node.Running_For) === -1) {
      electionPositions.push(node.Running_For);
    }
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.site.siteMetadata.title}</h1>

      {electionPositions.map((position) => {
        let matchingCandidates = [];
        data.allCandidatesCsv.edges.forEach(({ node }) => {
          if (node.Running_For === position) {
            matchingCandidates.push(node);
          }
        });

        return (
          <Position key={position} title={position} candidates={matchingCandidates} />
        );
      })}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allCandidatesCsv {
    edges {
      node {
        ...candidateFields
      }
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
  Running_For
  Name
  Pronouns
  Party
  Year
  Major
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
