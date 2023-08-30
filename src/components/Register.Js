import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({});

  const navigate  = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    const { name, email, password, avatar } = formData;
    e.preventDefault();
    props.CurrentUser({name:name,avatar:avatar})
    setFormData({ name: "", email: "", password: "", avatar: "" });
 
  };

  return (
    <PopupWithForm
      title={"Register"}
      name={"singUp"}
      onSubmitForm={onSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      handleExternalClick={props.handleExternalClick}
      setErrors={setErrors}
    >
      <label className="form__label">
        <input
          type="text"
          className="form__input"
          placeholder="My Name"
          name="name"
          required
          onChange={handleChange}
        />
      </label>
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
      <label className="form__label">
        <input
          type="url"
          className="form__input"
          placeholder="My Avatar"
          name="avatar"
          required
          onChange={handleChange}
        />
      </label>
    </PopupWithForm>
  );
};

export default Register;
