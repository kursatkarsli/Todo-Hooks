import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"




export default function Todo({task,complated,id,removeTodo,toogleTodo}) {
    return (
        <div>
            <ListItem>
                <Checkbox tabIndex={-1} checked={complated} onClick={() => toogleTodo(id)}/>
                <ListItemText style={{ textDecoration: complated ? "line-through" : "none" }}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="Edit">
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
           
            </ListItem>
        </div>
    )
}
