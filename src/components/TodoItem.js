import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default class TodoItem extends React.Component {
  render() {
    const { item, onSelected } = this.props;
    return (
      <tr>
        <td>{item.order}</td>
        <td>{item.title}</td>
        <td>{item.completed}</td>
        <td>{item.createdOn}</td>
        <td>
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
                completed: item.completed
              })
            }
          >
            <ClearIcon></ClearIcon>
          </button>
        </td>
      </tr>
    );
  }
}
