import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

const AddCardDialog = ({
    isAddNewCardDialogOpen,
    setIsAddNewCardDialogOpen,
    addCardOnSave,
}: {
    isAddNewCardDialogOpen: boolean;
    setIsAddNewCardDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addCardOnSave: (name: string) => void;
}) => {
    const [cardName, setCardName] = useState("");

    const handleClose = () => {
        setIsAddNewCardDialogOpen(false);
    };

    const handleOnSave = () => {
        addCardOnSave(cardName);
        setIsAddNewCardDialogOpen(false);
        setCardName("");
    };

    return (
        <Dialog
            open={isAddNewCardDialogOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Add Card</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add your card, please enter cardholder's name here.
                </DialogContentText>
                <TextField
                    type="text"
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    fullWidth
                    variant="standard"
                    required
                    onChange={(e) => setCardName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleOnSave} disabled={cardName === ""}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddCardDialog;
