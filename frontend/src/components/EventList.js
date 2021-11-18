import React, { Component } from "react";
import { Table } from "reactstrap";
import NewEventModal from "./NewEventModal";

class EventList extends Component {
  render() {
    const events = this.props.events;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>nom</th>
            <th>description</th>
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
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
                <td align="center">
                  
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