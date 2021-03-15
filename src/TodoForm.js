import React from 'react'
import useInputState from './useInput';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField margin="normal" label="Add new Todo" fullWidth value={value} onChange={handleChange} />
                
            </form>

        </Paper>
    )
}
