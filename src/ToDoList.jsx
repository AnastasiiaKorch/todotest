import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import {styled} from '@mui/material/styles';
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import EditTaskDialog from "./components/EditeTaskDialog";
import DeleteTaskDialog from "./components/DeleteTaskDialog";

const StyledListItem = styled(ListItem)(({theme}) => ({
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const [deleteTodoId, setDeleteTodoId] = useState(null);
    const [hoveredTodoId, setHoveredTodoId] = useState(null);

    const handleHoverTodo = (id) => {
        setHoveredTodoId(id);
    };
    const handleLeaveTodo = () => {
        setHoveredTodoId(null);
    };

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const addTodo = () => {
        if (newTodoText.includes('!')) {
            alert('Ошибка: введенный текст не может содержать символ "!".');
            return;
        }

        setTodos([...todos, { id: Date.now(), text: newTodoText }]);
        setNewTodoText('');
        setDrawerOpen(false);
    };

    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const handleEditTodo = (todo) => {
        setEditTodo(todo);
    };

    const handleSaveEdit = () => {
        setTodos(
            todos.map((t) => (t.id === editTodo.id ? { ...t, text: editTodo.text } : t))
        );
        setEditTodo(null);
    };

    const handleDeleteTodo = (id) => {
        setDeleteTodoId(id);
    };

    const confirmDelete = () => {
        setTodos(todos.filter((todo) => todo.id !== deleteTodoId));
        setDeleteTodoId(null);
    };

    const handleCancelDelete = () => {
        setDeleteTodoId(null);
    };

    return (
        <div>
            <h1 style={{ color: 'grey' }}>Список задач</h1>
            <Button
                variant="contained"
                onClick={openDrawer}
                style={{ backgroundColor: 'lightpink' }}
            >
                Добавить задачу
            </Button>

            <NewTaskForm
                newTodoText={newTodoText}
                setNewTodoText={setNewTodoText}
                addTodo={addTodo}
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                handleInputChange={handleInputChange}
            />

            <TaskList
                todos={todos}
                setTodos={setTodos}
                handleHoverTodo={handleHoverTodo}
                handleLeaveTodo={handleLeaveTodo}
                hoveredTodoId={hoveredTodoId}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
            />

            <EditTaskDialog
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                handleSaveEdit={handleSaveEdit}
            />

            <DeleteTaskDialog
                deleteTodoId={deleteTodoId}
                setDeleteTodoId={setDeleteTodoId}
                confirmDelete={confirmDelete}
                handleCancelDelete={handleCancelDelete}
            />
        </div>
    );
}

export default TodoList;