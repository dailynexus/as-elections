/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Header from "../components/header"

import "./layout.css"

library.add(faBars);

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `6rem 1.0875rem 1.45rem`, }}
      >
        <main>{children}</main>
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
