import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";


const NewTaskForm = ({handleInputChange,
                         newTodoText,
                         setNewTodoText,
                         addTodo,
                         drawerOpen,
                         setDrawerOpen,
                     }) => {
    return (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Toolbar>
                <h3>Toolbar</h3>
            </Toolbar>
            <div style={{ padding: '20px' }}>
                <TextField
                    label="Текст задачи"
                    value={newTodoText}
                    onChange={handleInputChange}
                    fullWidth
                />
                <Button
                    variant="contained"
                    onClick={addTodo}
                    disabled={newTodoText.trim() === ''}
                    style={{ backgroundColor: 'grey' }}
                >
                    Добавить
                </Button>
            </div>
        </Drawer>
    );
};
export default NewTaskForm;