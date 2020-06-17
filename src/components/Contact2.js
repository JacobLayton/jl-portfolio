import React from "react";
import "../styles/contact.css";
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
      .post(`http://localhost:5000/email`, { user })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Navbar2 />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" onChange={this.handleChange} />
          </label>
          <label>
            Message:
            <input type="textarea" name="text" onChange={this.handleChange} />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
