import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewEventForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    description: "",
    startDate: new Date().getTimezoneOffset(),
    endDate: new Date().getTimezoneOffset(),
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
    const maxLength = 32;
    return (
      <Form onSubmit={this.createEvent}>
        <FormGroup>
          <Label for="name">Nom:</Label>
          <Input
            data-testid="event-1"
            type="text"
            name="name"
            maxLength="32"
            onChange={this.onChange}
          />
          <div style={{fontSize:10}}>
            { maxLength } caracteres maximum
          </div>
                
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            maxLength="100"
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