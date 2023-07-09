import React from "react";
import styles from "./NoResults.module.scss";

interface NoResultsProps {
  getBackToDefaultUser: () => void;
}

export const NoResults = ({ getBackToDefaultUser }: NoResultsProps) => (
  <div className={styles.noResults}>
    <div>
      <h1 className={styles.nothing}>No results</h1>
      <span onClick={getBackToDefaultUser}>
        Click to back to the default user
      </span>
    </div>
  </div>
);
