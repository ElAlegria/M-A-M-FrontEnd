import React from "react";

const Navigate = (props) => {
  return (
    <>
      <div className="Navigate">
        <button className="button button__text">
          home
        </button>
        <button className="button button__text">{props.Info}</button>
        
      </div>
    </>
  );
};

export default Navigate;
