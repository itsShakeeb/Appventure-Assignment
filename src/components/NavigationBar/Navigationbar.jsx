import React from "react";
import { Link } from "react-router-dom";
import cssStyle from "./Navigationbar.module.css";
const Navigationbar = (props) => {
  return (
    <div className={cssStyle.LinkWrapper}>
      <Link
        to='/subcategory1'
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "#3a444c",
        }}
      >
        SubCategory1
      </Link>
      <Link
        to='/subcategory2'
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "#3a444c",
        }}
      >
        SubCategory2
      </Link>
      <Link
        to='/subcategory3'
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "#3a444c",
        }}
      >
        SubCategory3
      </Link>
      <Link
        to='/subcategory4'
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "#3a444c",
        }}
      >
        SubCategory4
      </Link>
      <Link
        to='/subcategory5'
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          color: "#3a444c",
        }}
      >
        SubCategory5
      </Link>
    </div>
  );
};

export default Navigationbar;
