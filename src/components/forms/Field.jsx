import React from "react";
import "./styles/Field.css";

const Field = ({ infoProps = {}, register, errors }) => {
  const { type = "text", title = "Title", textarea, placeholder } = infoProps;
  return (
    <div className="c-field">
      <label htmlFor={title.toLowerCase()}>{title}</label>
      {!textarea ? (
        <input
          id={title.toLowerCase()}
          type={type}
          className={`
            field__input ${errors[title.toLowerCase()] && "field--animated"}
          `}
          placeholder={placeholder}
          {...register(title.toLowerCase(), { required: true })}
        />
      ) : (
        <textarea
          id={title.toLowerCase()}
          rows="10"
          className={`
            field__textarea ${errors[title.toLowerCase()] && "field--animated"}
          `}
          placeholder={placeholder}
          {...register(title.toLowerCase(), { required: true })}
        ></textarea>
      )}
    </div>
  );
};

export default Field;
