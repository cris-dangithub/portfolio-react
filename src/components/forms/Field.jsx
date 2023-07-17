import React from "react";
import "./styles/Field.css";
import { useForm } from "react-hook-form";

const Field = ({ infoProps = {}, register }) => {
  const { type = "text", title = "Title", textarea, placeholder } = infoProps;
  return (
    <div className="c-field">
      <label htmlFor={title.toLowerCase()}>{title}</label>
      {!textarea ? (
        <input
          id={title.toLowerCase()}
          type={type}
          className="field__input"
          placeholder={placeholder}
          {...register(title.toLowerCase())}
        />
      ) : (
        <textarea
          id={title.toLowerCase()}
          rows="10"
          className="field__textarea"
          placeholder={placeholder}
          {...register(title.toLowerCase())}
        ></textarea>
      )}
    </div>
  );
};

export default Field;
