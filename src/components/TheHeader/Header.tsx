import React from "react";
import styles from "./Header.module.scss";
import { ThemeSwitcher } from "components/ThemeSwitcher";

interface HeaderProps {
  getBackToDefaultUser: () => void;
}
export const Header = ({ getBackToDefaultUser }: HeaderProps) => (
  <div className={styles.header}>
    <div onClick={getBackToDefaultUser} className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);
