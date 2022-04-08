import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
      edit: false,
    };
  }
  render() {
    const change = (event) => {
      this.setState({
        value: event.target.value,
      });
    };
    const addTask = () => {
      if (!this.state.value) {
        alert("Task cannot be Empty")
      } else {
        this.setState({
          list: [
            ...this.state.list,
            {
              id: uuidv4(),
              task: this.state.value,
            },
          ],
          value: "",
          edit: false,
        });
      }
    };

    const editTask = (id) => {
      const filteredList = this.state.list.filter((element) => {
        return element.id !== id;
      });
      const selectedItem = this.state.list.find((elt) => {
        return elt.id === id;
      });
      this.setState({
        list: filteredList,
        value: selectedItem.task,
        id: id,
        edit: true,
      });
    };
    const deleteTask = (id) => {
      const updatedList = this.state.list.filter((element) => {
        return element.id !== id;
      });
      this.setState({
        list: updatedList,
      });
    };
    const toggleTask = (event) => {
      const item = event.target;
      item.classList.toggle("strike")
    }

    return (
      <div className="container">
        <h1>To Do</h1>
        <input
          type="text"
          id="input"
          placeholder="Enter the task"
          onChange={change}
          value={this.state.value}
        />
        <button onClick={addTask} className="addbutton">
          {this.state.edit ? "Edit Task" : "Add Task"}
        </button>
        {this.state.list.map((item) => {
          return (
            <>
              <div className="todo" onClick={toggleTask}>
                {item.task}

                <button
                  className="todoDeleteButton fa fa-trash"
                  onClick={() => deleteTask(item.id)}
                >
                </button>
                <button
                  className="todoEditButton fa fa-edit"
                  onClick={() => editTask(item.id)}
                >
                </button>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
