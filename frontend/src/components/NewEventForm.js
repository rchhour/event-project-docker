import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewEventForm extends React.Component {
  state = {
    pk: 0,
    title: "",
    startDate: "",
    endDate: "",
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

  editEvent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.event ? this.editEvent : this.createEvent}>
        <FormGroup>
          <Label for="name">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">date de debut:</Label>
          <Input
            type="text"
            name="startDate"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.startDate)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">date de fin:</Label>
          <Input
            type="text"
            name="endDate"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.endDate)}
          />
        </FormGroup>
  
        <Button>Enregistrer</Button>
      </Form>
    );
  }
}

export default NewEventForm;