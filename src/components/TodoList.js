import React from "react";
import ModalDialog from "./ModalDialog";
import TodoItem from "./TodoItem";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      deleteDialogValue: false
    };
  }
  itemSelected = ({ id, order, title, completed, createdOn }) => {
    this.setState({
      selectedItem: { id, order, title, completed, createdOn }
    });
  };
  render() {
    const items = this.props.items;

    if (items && items.length > 0) {
      return (
        <>
          <table className="table table-secondary">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
                <th scope="col">Created Date</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onSelected={this.itemSelected}
                />
              ))}
            </tbody>
          </table>
          <ModalDialog
            title="Title"
            text="Content"
            cancelText="Cancel"
            saveText="OK"
            selectedItem={this.state.selectedItem}
          />
        </>
      );
    } else return <div>Empty</div>;
  }
}
