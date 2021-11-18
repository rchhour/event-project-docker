import React, { Component } from "react";
import { Table } from "reactstrap";
import NewEventModal from "./NewEventModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class EventList extends Component {
  render() {
    const events = this.props.events;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>titre</th>
            <th>date de debut</th>
            <th>date de fin</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!events || events.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Aucun événements</b>
              </td>
            </tr>
          ) : (
            events.map(event => (
              <tr key={event.pk}>
                <td>{event.title}</td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
                <td align="center">
                  <NewEventModal
                    create={false}
                    event={event}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={event.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default EventList;