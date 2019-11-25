import React from "react";

// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
      <div>
          <div className={"form-inline d-flex justify-content-center"} style={style}>
            <input
                ref={node => (input = node)}
                type="email"
                placeholder="Your email"
                className="form-control flex-fill mr-0 mb-3 mb-sm-0 rounded-0"
            />
            <button onClick={submit} className="btn btn-primary submit-btn rounded-0">Subscribe Now</button>
            </div>
            <div className="col-md-10 col-lg-8 mx-auto text-center">
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && (
                    <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            </div>
      </div>
    
  );
};

export default SimpleForm;