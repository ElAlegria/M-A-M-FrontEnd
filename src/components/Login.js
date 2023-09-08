import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();

  const formRef = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    const { email, password } = formData;
    e.preventDefault();
    if (
      props.LoginPs.some((e) => e.email === email && e.password === password)
    ) {
      navigate("/");
      props.handleLogin();
      setFormData({ email: "", password: "" });
      formRef.email.current.value = "";
      formRef.password.current.value = "";

      return;
    }
    navigate("/homepage");
  };

  return (
    <PopupWithForm
      title={"Login"}
      name={"singIn"}
      onSubmitForm={onSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleExternalClick={props.handleExternalClick}
      setErrors={setErrors}
      handleClose={props.handleClose}
    >
      <label className="form__label">
        <input
          type="email"
          className="form__input"
          placeholder="Correo electrónico"
          name="email"
          ref={formRef.email}
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        <input
          type="password"
          className="form__input"
          placeholder="Contraseña"
          name="password"
          ref={formRef.password}
          required
          onChange={handleChange}
        />
        <span className="popup__error popup__error_visible">
          {errors.about}
        </span>
      </label>
    </PopupWithForm>
  );
};

export default Login;
