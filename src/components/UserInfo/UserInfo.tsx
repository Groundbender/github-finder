import React from "react";
import styles from "./UserInfo.module.scss";
import { LocalGithubUser } from "types";
import { InfoItem, InfoItemProps } from "components/InfoItem";
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "assets/icon-website.svg";

interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  location,
  company,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },

    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
