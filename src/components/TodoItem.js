import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Table } from "semantic-ui-react";

export default class TodoItem extends React.Component {
  render() {
    const { item, onSelected } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{item.order}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.completed}</Table.Cell>
        <Table.Cell>{item.createdOn}</Table.Cell>
        <Table.Cell>
          <button
            className="btn btn-outline-danger"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() =>
              onSelected({
                id: item.id,
                order: item.order,
                title: item.title,
                completed: item.completed,
                isDelete: true
              })
            }
          >
            <ClearIcon></ClearIcon>
          </button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
