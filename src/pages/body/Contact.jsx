import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pageLoaded } from "../../store/slice/changeMode.slice";
import Field from "../../components/forms/Field";
import "./styles/Contact.css";
import useDataBase from "../../hooks/useDataBase";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const dispatch = useDispatch();
  const { contactMe } = useDataBase();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "You will soon receive an answer!",
          timer: 6000,
          timerProgressBar: true,
        }).then(() => reset())
      )
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "I'm sorry!",
          text: "Something went wrong with your message :(, please try again!",
          timer: 6000,
          timerProgressBar: true,
        })
      );
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
          errors={errors}
        />
      ))}
      <button className="u-button">Enviar</button>
    </form>
  );
};

export default Contact;
