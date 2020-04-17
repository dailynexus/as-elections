/**
 * Header for the entire interactive site.
 */

import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import Img from "gatsby-image"

import MenuButton from "./menu-button"
import SharingWidget from "./sharing-widget"

import styles from "./header.module.scss"

function Header({ isMenuActive, setIsMenuActive} ) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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
      <MenuButton isActive={isMenuActive} setActive={setIsMenuActive} />

      <h1 className={styles.headerLogo}>
        <a href="/">
          <Img alt={data.site.siteMetadata.title} fixed={data.logoImage.childImageSharp.fixed} />
        </a>
      </h1>

      <SharingWidget />
    </header>
  );
}

export default Header
