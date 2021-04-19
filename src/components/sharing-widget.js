/**
 * Menu to share the site.
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RWebShare } from "react-web-share";

import {sharing, shareText} from "./sharing-widget.module.scss";

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
        <FontAwesomeIcon icon="share-square" />
        <div className={shareText}>
          Share
        </div>
      </div>
    </RWebShare>
  );
}

export default SharingWidget;
