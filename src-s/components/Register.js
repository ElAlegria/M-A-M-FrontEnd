import React, { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const Register = (props) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const formRef = {
    name: useRef(null),
    email: useRef(null),
    password: useRef(null),
    avatar: useRef(null),
  };
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

    if (
      props.LoginUser.some((user) => (
         user.email === email
      ))
    ) {
      return console.log('Usuario ya existe')

    }
    props.LoginUser.push({
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    });
    props.CurrentUser({ name: name, avatar: avatar });
    props.isOpenLogin(true);
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
      handleClose={props.handleClose}
    >
      <label className="form__label">
        <input
          type="text"
          className="form__input"
          placeholder="My Name"
          name="name"
          ref={formRef.name}
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
      <label className="form__label">
        <input
          type="url"
          className="form__input"
          placeholder="My Avatar"
          name="avatar"
          ref={formRef.avatar}
          required
          onChange={handleChange}
        />
      </label>
      
    </PopupWithForm>
  );
};

export default Register;
