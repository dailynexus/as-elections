/**
 * Menu to share the site.
 */

import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./sharing-widget.module.scss";

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

  const facebookURL = "https://www.facebook.com/sharer/sharer.php?u=";
  const twitterURL = "https://twitter.com/intent/tweet?text=";

  return (
    <div className={styles.sharing}>
      <div className={styles.shareText}>
        <FontAwesomeIcon className={styles.faShareSquare} icon="share-square" />
        Share
      </div>

      <div className={styles.shareButtons}>
        <a href={facebookURL + data.site.siteMetadata.siteUrl}>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>

        <a href={twitterURL + data.site.siteMetadata.siteUrl}>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
      </div>
    </div>
  );
}

export default SharingWidget;
