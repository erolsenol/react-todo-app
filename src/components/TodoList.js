import React from "react";
import ModalDialog from "./ModalDialog";
import TodoItem from "./TodoItem";
import { Table } from "semantic-ui-react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: { isDelete: false },
      deleteDialogValue: false
    };
  }
  itemSelected = ({ id, order, title, completed, createdOn, isDelete }) => {
    this.setState({
      selectedItem: { id, order, title, completed, createdOn, isDelete }
    });
  };
  render() {
    const items = this.props.items;

    if (items && items.length > 0) {
      return (
        <>
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Order</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Completed</Table.HeaderCell>
                <Table.HeaderCell>Created Date</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onSelected={this.itemSelected}
                />
              ))}
            </Table.Body>
          </Table>
          <ModalDialog
            title="Title"
            text="Are you sure you want to delete"
            cancelText="Cancel"
            saveText="OK"
            selectedItem={this.state.selectedItem}
          />
        </>
      );
    } else return <div>Empty</div>;
  }
}
