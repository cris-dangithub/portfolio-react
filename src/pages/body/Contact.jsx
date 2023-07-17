import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pageLoaded } from "../../store/slice/changeMode.slice";
import Field from "../../components/forms/Field";
import "./styles/Contact.css";
import useDataBase from "../../hooks/useDataBase";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const dispatch = useDispatch();
  const { contactMe } = useDataBase();
  const { register, handleSubmit } = useForm();

  const Submit = (data) => {
    const emailJSdata = {
      service_id: "contact_service",
      template_id: "contact_form",
      user_id: "V8S5Jjaf39IHF_FHa",
      template_params: {
        ...data,
        contact_number: (Math.random() * 100000).toFixed(0),
      },
    };
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", emailJSdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(pageLoaded());
  }, []);
  return (
    <form className="contact" onSubmit={handleSubmit(Submit)}>
      <h2 className="about__title contact__title">Contact me</h2>
      {contactMe.map((fieldProps) => (
        <Field
          key={fieldProps.title}
          infoProps={fieldProps}
          register={register}
        />
      ))}
      <button className="u-button">Enviar</button>
    </form>
  );
};

export default Contact;
