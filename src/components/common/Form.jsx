import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    isLoading: false,
  };

  // error validation
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // validate errors with schema
  validationProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // handle submit
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  // handle change
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validationProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value; // Update input value

    this.setState({ data, errors });
  };

  // Submit button Re-usable
  renderButton(label, className, onClick) {
    return (
      <>
        <button
          disabled={this.validate() || this.state.isLoading}
          onClick={onClick}
          className={className}
          type="submit"
        >
          {this.state.isLoading ? (
            <div
              className="spinner-border text-light spinner-border-sm"
              role="status"
            ></div>
          ) : (
            label
          )}
        </button>
        {/* {icon && <i className={icon}></i>} */}
      </>
    );
  }

  // Input Re-usable
  renderInput(
    name,
    type,
    id,
    placeholder,
    className,
    maxLength,
    pattern,
    autoFocus
  ) {
    return (
      <Input
        value={this.state.data[name]}
        onChange={(e) => this.handleChange(e)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
        autoFocus={autoFocus}
      />
    );
  }
}

export default Form;
