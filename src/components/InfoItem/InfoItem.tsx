import React from "react";
import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || "Not Available";
  let currentHref = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}`}>
      {icon}
      <div className={`${text ? "" : `${styles.empty}`}`}>
        {isLink && text ? (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : (
          <span>{currentText}</span>
        )}
      </div>
    </div>
  );
};
