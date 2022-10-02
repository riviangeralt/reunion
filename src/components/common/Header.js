import Button from "components/form-components/Button";
import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    {
      label: "Favourite",
    },
    {
      label: "Buy",
    },
    {
      label: "Sell",
    },
  ];
  return (
    <div className={styles.header}>
      <Link className={styles.logo} to="/">
        Estaterry
      </Link>
      <div className={styles.menu}>
        {links.map((item, index) => {
          return (
            <Link to="/fav" className={styles.menuItem} key={index}>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className={styles.action}>
        <Button label={"Login"} />
        <Button label={"Signup"} />
      </div>
    </div>
  );
};

export default Header;
