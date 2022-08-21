import React, { Component } from "react";
import { connect } from "react-redux";

// import Todo component
import Todo from "./Todo";


// 1. Create Todos Container component
// 2. write mapStateToProps() function so we can get a list of todos from Rexux state

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    render() {
        return(
            <ol>{this.renderTodos()}</ol>
        );
    };
};

// 2
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect()(TodosContainer);

