import React from "react";
import { useRef } from "react";

const PopupWithForm = ({
  children,
  setErrors,
  name,
  title,
  onSubmitForm,
  onClose,
  handleClose
  // isOpenLogin,

}) => {
  const formRef = useRef(null);

  const handleInput = (event) => {
    const input = event.target;
    const errors = { ...setErrors };

    if (!input.form) {
      return;
    }
    if (!input.validity.valid) {
      errors[input.name] = input.validationMessage;
    } else {
      errors[input.name] = "";
    }
    setErrors(errors);
  };

  const isInvalid = () => {
    if (!formRef.current) return false;
    const formInputs = formRef.current.elements;
    return Array.from(formInputs).some((input) => {
      return input.validity.valid === false;
    });
  };

  return (
    <>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className={`popup_form popupform_type${name}`}
          name={name}
          onSubmit={onSubmitForm}
          onInput={handleInput}
          ref={formRef}
          noValidate
        >
          {children}
          <button
            type="submit"
            className={`button button__text popup__button_type_${name} 
            ${isInvalid() ? "popup__button_disabled" : ""}`}
            disabled={isInvalid()}
            onClick={onClose}
          >
            {name === "singIn" ? "Login" : "Register"}
          </button>
          {/* <button className="form__link" onClick={name === "singIn" ?  isOpenLogin(false): ""}>
            {name === "singIn"
              ? "¿Aún no eres miembro? Regístrate aquí"
              : "¿Ya eres miembro? Inicia sesión aquí"}
          </button> */}
        </form>
      </div>
      <div className="popup__overlay" onClick={handleClose}></div>

      </>
  );
};
// ¿Ya eres miembro? Inicia sesión aquí

export default PopupWithForm;
