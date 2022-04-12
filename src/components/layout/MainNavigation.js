import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great Quotes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/new-quote"
            >
              Add new Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
