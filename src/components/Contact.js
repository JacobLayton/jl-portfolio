import React from "react";
import "../styles/contact.css";
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
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="exampleName"
              placeholder="first and last please"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="subject" sm={2}>
            Subject
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="subject"
              id="exampleSubject"
              placeholder=""
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Message
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
