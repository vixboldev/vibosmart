import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

export default function ModleCategory({
  open,
  handleClose,
  handleInput,
  handleAdd,
  error,
}) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
      >
        <DialogTitle>{"MODAL CATEGORY"}</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleInput}
            error={!!error.name}
            helperText={error.name}
          />
          <TextField
            sx={{ mt: 2 }}
            multiline
            rows={2}
            fullWidth
            label="Description"
            name="description"
            variant="outlined"
            onChange={handleInput}
            error={!!error.description}
            helperText={error.description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancle
          </Button>
          <Button onClick={handleAdd}>ADD</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
