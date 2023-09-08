import React from "react";

function Popup(props) {
  return (
    <>
      <section className={`popup ${props.isOpen ? "popup_opened" : ""} `}>
        {props.children}
      </section>
    </>
  );
}

export default Popup;
