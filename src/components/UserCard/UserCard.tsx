import React from "react";
import styles from "./UserCard.module.scss";
import { UserStat } from "components/UserStat";
import { LocalGithubUser } from "types";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img className={styles.avatar} src={props.avatar} alt={props.login} />
    <UserTitle created={props.created} login={props.login} name={props.name} />
    <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
      {props.bio || "This profile has no bio"}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      location={props.location}
      twitter={props.twitter}
      company={props.company}
    />
  </div>
);
