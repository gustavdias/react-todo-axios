import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/Layout/Header";
// import uuid from 'uuid';
// import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";
import Axios from "axios";

class App extends Component {
  state = {
    todos: [
    ],
  };
  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.cypress.io/todos?_limit=10"
    ).then((res) => this.setState({ todos: res.data }));
  }
  //toggles the state.todo.completed = cross each item
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //Delete Todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.cypress.io/todos/${id}`).then((res) =>
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      })
    );
  };

  //Add Todo
  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.cypress.io/todos", {
      title,
      completed: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
    // const newTodo = {
    //   id: uuidv4(),
    //   title: title,
    //   completed: false,
    // };
    // this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              path="/"
              exact
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div>
//       Hello
//     </div>
//   );
// }
export default App;
