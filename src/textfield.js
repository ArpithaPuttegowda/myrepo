import React from "react";
const TextBox = ({
  lbl,
  type,
  name,
  input,
  meta: { touched, error, warning },
}) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-4 text-right">{lbl}:</div>
        <div className="col-sm-4 form-group">
          <input {...input} type={type} name={name} className="form-control" />
        </div>
        <div className="col-sm-4">
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    </>
  );
};
export default TextBox;
