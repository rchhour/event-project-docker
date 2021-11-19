import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEventForm from "./NewEventForm";

class NewEventModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
  
    var title = "Creer un evenement";

    var button = (
      <Button
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
      >
        Créer un événement
      </Button>
    );
    

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewEventForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              event={this.props.event}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewEventModal;