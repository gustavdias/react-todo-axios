import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //   getStyle = () => {
  //     if (this.props.todo.completed) {
  //       return {
  //         textDecoration: "line-through",
  //       };
  //     } else {
  //       return {
  //         textDecoration: "none",
  //       };
  //     }
  //   };
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
//the method is transferred one level up to Todos.js
//   markComplete = (e) => {
//       console.log(this.props)
//   }
//TodoItem.js:26 Uncaught TypeError: Cannot read property 'props' of undefined
//You can use bind: onChange={this.markComplete.bind(this)}

  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {""} */}
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {""}
          {/* {this.props.todo.title} */}
          {title}
          <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}></button>
        </p>
      </div>
    );
  }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border:'none',
    padding: '5px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem;
