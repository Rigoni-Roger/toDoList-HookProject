import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo task={todo.task} id={todo.id} key={todo.id} completed={todo.completed} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}
export default TodoList;