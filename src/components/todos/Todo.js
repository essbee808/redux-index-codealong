import React from "react";


// functional component that returns an li displaying props
const Todo = props => {
    return (
        <li>{props.text}</li>
    );
};

export default Todo;