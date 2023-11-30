import React from "react";
import { CardInfoIF } from "../../utils/Modal";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpeedIcon from "@mui/icons-material/Speed";
import GoogleIcon from "@mui/icons-material/Google";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@mui/material";

interface CardActionsProps {
    visibleCard: CardInfoIF;
    freezeCardHandler: (id: number) => void;
    unfreezeCardHandler: (id: number) => void;
    cancelCardHanlder: (id: number) => void;
}

const CardActions = ({
    visibleCard,
    freezeCardHandler,
    unfreezeCardHandler,
    cancelCardHanlder,
}: CardActionsProps) => {
    const [open, setOpen] = React.useState(false);

    const onToggleFreezeCardHandler = () => {
        if (visibleCard.isFreeze) {
            unfreezeCardHandler(visibleCard.id);
        } else {
            freezeCardHandler(visibleCard.id);
        }
    };

    const onClickCancelCardHandler = () => {
        handleClickOpen();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onConfirmCancelCardHandler = () => {
        cancelCardHanlder(visibleCard.id);
        handleClose();
    };

    return (
        <>
            <div
                className="card-control flex justify-around rounded-t-3xl p-6 gap-2"
                style={{ backgroundColor: "#EDF3FF", height: "120px" }}
            >
                <div
                    className="flex flex-col items-center"
                    style={{ width: 64 }}
                    onClick={onToggleFreezeCardHandler}
                >
                    <div
                        className="h-8 w-8 rounded-full flex justify-center items-center"
                        style={{ backgroundColor: "#325BB0" }}
                    >
                        <AcUnitIcon sx={{ color: "white" }} fontSize="small" />
                    </div>
                    <Typography sx={{ textAlign: "center", fontSize: "0.8em" }}>
                        {visibleCard.isFreeze ? "Unfreeze card" : "Freeze card"}
                    </Typography>
                </div>
                <div
                    className="flex flex-col items-center"
                    style={{ width: 64 }}
                >
                    <div
                        className="h-8 w-8 rounded-full flex justify-center items-center"
                        style={{ backgroundColor: "#325BB0" }}
                    >
                        <SpeedIcon sx={{ color: "white" }} fontSize="small" />
                    </div>
                    <Typography sx={{ textAlign: "center", fontSize: "0.8em" }}>
                        Set spend limit
                    </Typography>
                </div>
                <div
                    className="flex flex-col items-center"
                    style={{ width: 64 }}
                >
                    <div
                        className="h-8 w-8 rounded-full flex justify-center items-center"
                        style={{ backgroundColor: "white" }}
                    >
                        <GoogleIcon
                            sx={{ color: "#325BB0" }}
                            fontSize="small"
                        />
                    </div>
                    <Typography sx={{ textAlign: "center", fontSize: "0.8em" }}>
                        Add to GPay
                    </Typography>
                </div>
                <div
                    className="flex flex-col items-center"
                    style={{ width: 64 }}
                >
                    <div
                        className="h-8 w-8 rounded-full flex justify-center items-center"
                        style={{ backgroundColor: "#325BB0" }}
                    >
                        <ReplayIcon sx={{ color: "white" }} fontSize="small" />
                    </div>
                    <Typography sx={{ textAlign: "center", fontSize: "0.8em" }}>
                        Replace Card
                    </Typography>
                </div>
                <div
                    className="flex flex-col items-center"
                    style={{ width: 64 }}
                    onClick={onClickCancelCardHandler}
                >
                    <div
                        className="h-8 w-8 rounded-full flex justify-center items-center"
                        style={{ backgroundColor: "#325BB0" }}
                    >
                        <DeleteIcon sx={{ color: "white" }} fontSize="small" />
                    </div>
                    <Typography sx={{ textAlign: "center", fontSize: "0.8em" }}>
                        Cancel card
                    </Typography>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Cancel Card</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure, you want to remove this card?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Later</Button>
                    <Button onClick={onConfirmCancelCardHandler} autoFocus>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CardActions;
