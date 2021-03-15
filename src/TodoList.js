import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './ToDo';

function TodoList({ todos, removeTodo, toogleTodo }) {
    return (
        <Paper>
            <List>
                {todos.map((todo) => (
                    <>
                        <Todo toogleTodo={toogleTodo} id={todo.id} task={todo.task} key={todo.id} complated={todo.complated} removeTodo={removeTodo} />
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    )
    
}
export default TodoList;