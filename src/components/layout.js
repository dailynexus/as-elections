/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faTimes, faQuestionCircle, faCaretRight, faShareSquare } from '@fortawesome/free-solid-svg-icons'

import Header from "../components/header"

import "./layout.css"
import "../styles/base/_index.scss";

library.add(faFacebook, faTwitter, faHome, faTimes, faQuestionCircle, faCaretRight, faShareSquare);

function Layout({ location, children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const childrenWithProps = React.Children.map(children, (child) => 
    React.cloneElement(child, { isMenuActive: isMenuActive })
  );

  useEffect(() => {
    if (location === '/') {
      document.documentElement.style.scrollBehavior = 'smooth';
    } else {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  });

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
          <p><i>
            Edited on May 17: A previous version of this elections guide 
            included questionnaire answers that Leon Barhoum did not submit, 
            this guide has been updated to reflect that Barhoum did not submit 
            any questionnaire answers.
          </i></p>
          © {new Date().getFullYear()} The Daily Nexus. 
          <p style={{marginBottom: 0}}>
            Feedback or suggestions? 
            <a href="mailto:web@dailynexus.com" target="_blank" style={{marginLeft: "0.5rem"}}>
              Send us an email!
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
