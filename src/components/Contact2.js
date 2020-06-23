import React from "react";
import "../styles/contact2.css";
import Navbar2 from "./Navbar2";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    text: "",
    hasSubmittedForm: false,
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text,
    };

    axios
      // .post(`https://portfolio-node-backend.herokuapp.com/email`, { user })
      .post(`https://portfolio-node-backend.herokuapp.com`, { user })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
    this.setState({ hasSubmittedForm: true });
  };

  thankYouButton = () => {
    if (this.hasSubmittedForm) {
      return <h1>Thank You!</h1>;
    }
    return <button type="submit">Submit</button>;
  };

  render() {
    return (
      <div>
        <Navbar2 />
        <div className="form-card">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              className="input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              className="input"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={this.handleChange}
              className="input"
            />

            {/* <input
              type="textarea"
              name="text"
              placeholder="Enter message here"
              onChange={this.handleChange}
              className="text-input"
              wrap="pyhsical"
              rows="10"
            /> */}
            <textarea
              name="text"
              placeholder="Enter your message here"
              onChange={this.handleChange}
              className="text-input"
              rows="5"
            ></textarea>
            {/* <this.thankYouButton hasSubmittedForm={false} /> */}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
