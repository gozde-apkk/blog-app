import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const Footer = () => {
  return (
    <footer className=" text-white">
      <ul className="flex justify-center items-center gap-5 mb-16 sm:flex-col lg:flex-row text-white ">
        <li>
          <Link to="posts/categories/Agricultere"> Agricultere </Link>
        </li>
        <li>
          <Link to="posts/categories/Business"> Business </Link>
        </li>
        <li>
          <Link to="posts/categories/Education"> Education </Link>
        </li>
        <li>
          <Link to="posts/categories/Entertainment"> Entertainment </Link>
        </li>
        <li>
          <Link to="posts/categories/Art"> Art </Link>
        </li>
        <li>
          <Link to="posts/categories/Investment"> Investment </Link>
        </li>
        <li>
          <Link to="posts/categories/Uncategorized"> Uncategorized </Link>
        </li>
        <li>
          <Link to="posts/categories/Weather"> Weather </Link>
        </li>
      </ul>

      <div className="footer_copright">
        <small>All Rights Reserved &copy;Copyright, Egator Tutorials</small>
      </div>
    </footer>
  );
};

export default Footer;
