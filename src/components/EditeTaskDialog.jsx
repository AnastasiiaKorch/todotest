import {Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

const EditTaskDialog = ({ editTodo, setEditTodo, handleSaveEdit }) => {
    return (
        <Dialog open={!!editTodo} onClose={() => setEditTodo(null)}>
            <DialogTitle>Редактирование задачи</DialogTitle>
            <DialogContent>
                <DialogContentText>Измените текст задачи:</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Текст задачи"
                    type="text"
                    fullWidth
                    value={editTodo?.text || ''}
                    onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setEditTodo(null)}>Отмена</Button>
                <Button onClick={handleSaveEdit}>Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
};
export default EditTaskDialog;