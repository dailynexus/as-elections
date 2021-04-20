/**
 * Menu to share the site.
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { RWebShare } from "react-web-share";

import {sharing, shareIcon, shareText} from "./sharing-widget.module.scss";

// Fix FOUC from Font Awesome
config.autoAddCss = false

function SharingWidget() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <RWebShare
      data={{
        title: "Share our A.S. Elections Guide",
        text: "",
        url: data.site.siteMetadata.siteUrl
      }}>
      <div className={sharing}>
        <FontAwesomeIcon className={shareIcon} icon="share-square" />
        <div className={shareText}>
          Share
        </div>
      </div>
    </RWebShare>
  );
}

export default SharingWidget;
