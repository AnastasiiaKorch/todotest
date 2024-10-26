import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteTaskDialog = ({
                              deleteTodoId,
                              setDeleteTodoId,
                              confirmDelete,
                              handleCancelDelete,
                          }) => {
    return (
        <Dialog
            open={!!deleteTodoId}
            onClose={handleCancelDelete}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Удалить задачу?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Вы уверены, что хотите удалить эту задачу?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancelDelete}>Отмена</Button>
                <Button onClick={confirmDelete} autoFocus>
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteTaskDialog;