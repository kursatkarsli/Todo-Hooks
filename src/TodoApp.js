import React,{useState} from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';


/*Material-Ui*/
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import {UpdateTwoTone} from '@material-ui/icons'

/*Material-Ui*/ 
/*Uuid */
import {uuid} from 'uuidv4'
/*Uuid */




export default function TodoApp({removeTodo}) {
    const initialTodos = [
        { id: 1, task: "GraphQl Course", complated: false },
        { id: 2, task: "Mern Stack Development", complated: true },
        { id: 3, task: "Asp.Net Core Backend", complated: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuid(), task: newTodoText, complated: false }]);
    }

    const removeTodos = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toogleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? {
            ...todo, complated: !todo.complated
        } : todo);
        setTodos(updatedTodos);
        }
    
    return (
            <Paper style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor:"#fafafa",
            }}
            elevation={0}>
                <AppBar color="primary" position="static" style={{ height: "64px" }}>
                    <Toolbar>
                        <Typography color="inherit">TODOS WITH HOOKS</Typography>
                    </Toolbar>

                </AppBar>
                <Grid container justify="center" style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo} />
                        <TodoList toogleTodo={toogleTodo} removeTodo={removeTodos} todos={todos} />
                        
                    </Grid>
                </Grid>
            </Paper>
        
    )
}
