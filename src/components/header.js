/**
 * Header for the entire interactive site.
 */

import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./header.module.scss"

function Header() {
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
      <div className={styles.menu}>
        <FontAwesomeIcon className={styles.faBars} icon="bars" />
        MENU
      </div>

      <h1 className={styles.headerLogo}>
        <a href={data.site.siteMetadata.siteHomeUrl}>
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        </a>
      </h1>

      <div className={styles.sharing}></div>
    </header>
  );
}

export default Header
