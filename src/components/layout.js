/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faCaretRight, faShareSquare } from '@fortawesome/free-solid-svg-icons'

import Header from "../components/header"

import "./layout.css"
import "../styles/base/_index.scss";

library.add(faFacebook, faTwitter, faTimes, faCaretRight, faShareSquare);

function Layout({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(true);

  const childrenWithProps = React.Children.map(children, (child) => 
    React.cloneElement(child, { isMenuActive: isMenuActive })
  );

  return (
    <>
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `6rem 1.0875rem 1.45rem`, }}
        >
        <main>{childrenWithProps}</main>
        <footer>
          © {new Date().getFullYear()} The Daily Nexus
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
