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
  FormText
} from "reactstrap";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <Form
          className="the-form"
          action="https://formspree.io/mgeeydyk"
          method="POST"
        >
          <FormGroup row>
            {/* <Label for="name" sm={2}>
              Name
            </Label> */}
            <Col sm={12}>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            {/* <Label for="email" sm={2}>
              Email
            </Label> */}
            <Col sm={12}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            {/* <Label for="subject" sm={2}>
              Subject
            </Label> */}
            <Col sm={12}>
              <Input
                type="text"
                name="subject"
                id="exampleSubject"
                placeholder="subject"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            {/* <Label for="exampleText" sm={2}>
              Message
            </Label> */}
            <Col sm={12}>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder=""
              />
            </Col>
            <Input
              type="hidden"
              name="_next"
              value="http://localhost:3000/home"
            />
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 5 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
