/**
 * Header for the entire interactive site.
 */

import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteHomeUrl
        }
      }

      logoImage: file(relativePath: {eq: "daily-nexus-logo.png"}) {
        childImageSharp {
          fixed(width: 210, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <div className={styles.menu}></div>

      <h1 className={styles.headerLogo}>
        <a href={data.site.siteMetadata.siteHomeUrl}>
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        </a>
      </h1>

      <div className={styles.sharing}></div>
    </header>
  )
}

Header.propTypes = {
  interactiveURL: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
