import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pageLoaded } from "../../store/slice/changeMode.slice";
import Field from "../../components/forms/Field";
import "./styles/Contact.css";
import useDataBase from "../../hooks/useDataBase";
import { useForm } from "react-hook-form";

const Contact = () => {
  const dispatch = useDispatch();
  const { contactMe } = useDataBase();
  const { register, handleSubmit } = useForm();
  const Submit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(pageLoaded());
  }, []);
  return (
    <form className="contact" onSubmit={handleSubmit(Submit)}>
      <h2 className="about__title contact__title">Contact me</h2>
      {contactMe.map((fieldProps) => (
        <Field key={fieldProps.title} infoProps={fieldProps} register={register} />
      ))}
      <button className="u-button">Enviar</button>
    </form>
  );
};

export default Contact;
