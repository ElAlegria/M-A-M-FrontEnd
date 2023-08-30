import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({});
const navigate = useNavigate()
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

    setFormData({email:'',password:''})
    navigate('/')
    props.handleLogin()
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
    >
      <label className="form__label">
        <input
          type="email"
          className="form__input"
          placeholder="Correo electrónico"
          name="email"
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
