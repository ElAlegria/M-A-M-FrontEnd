import React from "react";

function Popup(props) {
  // const {onClose} = props
  return (
    <>
      <section className={`popup ${props.isOpen ? "popup_opened" : ""} `}>
        {props.children}
        <div className="popup__overlay"></div>

      </section>
    </>
  );
}

export default Popup;
