import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food-App</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Table full of delicious foods!" />
      </div>
    </Fragment>
  );
};

export default Header;
