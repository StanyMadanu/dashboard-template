import React, { Component } from "react";
import Joi from "joi-browser";
import { publicIpv4 } from "public-ip"; // Named import for IP fetching
import { fullBrowserVersion } from "react-device-detect"; // Get browser version
import FingerprintJS from "@fingerprintjs/fingerprintjs"; // For device fingerprinting
import { toast } from "react-toastify";
import { Navigate, Link } from "react-router-dom";
import Form from "../common/Form";
import authService from "../../services/authService";
import "react-toastify/dist/ReactToastify.css";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    last_ip: "", 
    device_id: "", 
    browser_id: "",
    fcm_token: "staging",
    errors: {},
    passwordtoggle: false,
    isLoading: false,
  };

  // Joi schema for form validation
  schema = {
    email: Joi.string()
      .required()
      .email()
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/)
      .options({
        language: {
          string: {
            regex: {
              base: "should not contain special characters ",
              test: "another description",
            },
          },
        },
      })
      .label("Email")
      .max(55),
    password: Joi.string()
      .required()
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=])/
      )
      .options({
        language: {
          string: {
            regex: {
              base: "should contain at least 1 capital letter, 1 small letter, 1 number, 1 special character",
              test: "another description",
            },
          },
        },
      })
      .label("Password")
      .min(8)
      .max(15),
  };

  // Fetch device, browser, and IP data when the component mounts
  async componentDidMount() {
    try {
      await this.fetchIPAddress(); // Fetch IP address
      this.getDeviceId(); // Generate or fetch device ID
      this.setState({ browser_id: fullBrowserVersion }); // Set browser version
    } catch (ex) {
      toast.error("Failed to initialize login data");
    }
  }

  // Fetch the user's public IP address
  fetchIPAddress = async () => {
    try {
      const ip = await publicIpv4(); // Fetch public IPv4
    //   console.log("IP Address:", ip);
      this.setState({ last_ip: ip });
    } catch (error) {
      console.error("Failed to fetch IP address", error);
      toast.error("Failed to fetch IP address");
    }
  };

  // Generate or fetch a unique device ID using FingerprintJS
  getDeviceId = async () => {
    try {
      const fp = await FingerprintJS.load(); // Load FingerprintJS
      const result = await fp.get(); // Get the fingerprint
      this.setState({ device_id: result.visitorId }); // Set device ID
    } catch (error) {
      console.error("Failed to fetch device ID", error);
      toast.error("Failed to fetch device ID");
    }
  };

  // Handle form submission
  doSubmit = async () => {
    this.setState({ isLoading: true }); // Start loading

    const { email, password } = this.state.data;
    const { last_ip, device_id, browser_id, fcm_token } = this.state;

    try {
      // Call the login service
      await authService.login(
        email,
        password,
        last_ip,
        device_id,
        browser_id,
        fcm_token
      );

      toast.success("Login successful!");
      console.log("Login Data:", {
        email,
        password,
        last_ip,
        device_id,
        browser_id,
        fcm_token,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
        toast.error("Invalid email or password");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Toggle password visibility
  handlePasswordToggle = () => {
    this.setState((prevState) => ({
      passwordtoggle: !prevState.passwordtoggle,
    }));
  };

  // Render the form and UI
  render() {
    const { errors, passwordtoggle } = this.state;

    if (authService.getCurrentUser()) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <div className="auth-pages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-4 col-12">
              <div className="bg-white p-4 rounded-4">
                <form onSubmit={this.handleSubmit}>
                  <h1 className="h3 mb-3 fw-semibold">Please sign in</h1>

                  {/* Email */}
                  <div className="form-floating mb-4">
                    {this.renderInput(
                      "email",
                      "text",
                      "email",
                      "Enter Your Email",
                      "form-control",
                      "",
                      true,
                      35,
                      true
                    )}
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="form-floating position-relative mb-4">
                    {this.renderInput(
                      "password",
                      passwordtoggle ? "text" : "password",
                      "password",
                      "Enter Your Password",
                      "form-control "
                    )}
                    <div
                      className="form-control-position view-password-icon"
                      onClick={this.handlePasswordToggle}
                    >
                      <i
                        className={`cursor fa-regular ${
                          passwordtoggle ? "fa fa-eye" : "fa fa-eye-slash"
                        }`}
                      ></i>
                    </div>
                    {errors.password && (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  </div>

                  <div className="text-end mb-3 fs-16">
                    <Link to="/forgotpassword" className="text-default">
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    {this.renderButton("Login", "btn btn-primary mt-3")}
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center mt-3">
                    <p className="mb-0">
                      Don't have an account?
                      <Link
                        to="/register"
                        className="text-primary text-decoration-underline"
                      >
                        {" "}
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
