import React from 'react';
import { styled } from '@mui/material/styles';
import ListItem from "@mui/material/ListItem";
import {ListItemText} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));
const TaskList = ({
                      todos,
                      setTodos,
                      handleHoverTodo,
                      handleLeaveTodo,
                      hoveredTodoId,
                      handleEditTodo,
                      handleDeleteTodo,
                  }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <StyledListItem
                    key={todo.id}
                    onMouseEnter={() => handleHoverTodo(todo.id)}
                    onMouseLeave={() => handleLeaveTodo(todo.id)}
                    style={{height:"100px", alignItems:"unset"}}
                >
                    <ListItemText
                        primary={todo.text}
                        secondary={
                            <span
                                style={{
                                    display: hoveredTodoId === todo.id ? 'block' : 'none',
                                }}
                            >
                <EditIcon onClick={() => handleEditTodo(todo)} />
              </span>
                        }
                    />
                    <DeleteIcon onClick={() => handleDeleteTodo(todo.id)} />
                </StyledListItem>
            ))}
        </ul>
    );
};

export default TaskList;