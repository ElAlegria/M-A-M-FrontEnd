import React from "react";
import { useMatch } from "react-router-dom";
import { Link } from "react-scroll";

const Navigate = (props) => {
  const { userLogin ,home,myList} = props;

  return (
    <>
      <div className={`Navigate ${userLogin ? "navigate__navigate-user" : ""}`}>
        {useMatch("homepage") && (
          <>
            <Link
              className="button button__text"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-300}
              duration={400}
            >
              Home
            </Link>
            <Link
              className="button button__text"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={200}
              duration={400}
            >
              About Us
            </Link>
          </>
        )}
        {useMatch("/") && (
          <>
            <button className="button button__text" onClick={home}>home</button>
            <button className="button button__text" onClick={myList}>My list</button>
          </>
        )}
      </div>
    </>
  );
};

export default Navigate;
