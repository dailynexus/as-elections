/**
 * Header for the entire interactive site.
 */

import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import MenuButton from "./menu-button"
import SharingWidget from "./sharing-widget"

import {header, faBars, headerLogo, logoImage} from "./header.module.scss";

function Header({ isMenuActive, setIsMenuActive} ) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={header}>
      <MenuButton isActive={isMenuActive} setActive={setIsMenuActive} />

      <h1 className={headerLogo}>
        <a href="/">
          <StaticImage className={logoImage} src="../images/daily-nexus-logo.png" width={250}
            loading="eager" placeholder="tracedSVG"
            alt={data.site.siteMetadata.title} />
        </a>
      </h1>

      <SharingWidget />
    </header>
  );
}

export default Header
