import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewEventForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    description: "",
    startDate: Date,
    endDate: Date,
  };

  componentDidMount() {
    if (this.props.event) {
      const { pk, title, startDate, endDate } = this.props.event;
      this.setState({ pk, title, startDate, endDate});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createEvent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  render() {
    return (
      <Form onSubmit={this.createEvent}>
        <FormGroup>
          <Label for="name">Nom:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="startDate">date de debut:</Label>
          <Input
            type="date"
            name="startDate"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">date de fin:</Label>
          <Input
            type="date"
            name="endDate"
            onChange={this.onChange}
          />
        </FormGroup>
  
        <Button>Enregistrer</Button>
      </Form>
    );
  }
}

export default NewEventForm;