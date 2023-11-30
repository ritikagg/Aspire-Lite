import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import AddCardDialog from "./AddCardDialog";
import { useDispatch } from "../../store";
import { CardInfoIF } from "../../utils/Modal";
import {
    generateRandomCVV,
    generateRandomCardNumber,
    randomDebitCardExpiration,
} from "../../utils/Index";

const Header = () => {
    const dispatch = useDispatch();
    const [isAddNewCardDialogOpen, setIsAddNewCardDialogOpen] = useState(false);
    const handleClickOpen = () => {
        setIsAddNewCardDialogOpen(true);
    };

    const onAddCard = (name: string) => {
        const addedCard: CardInfoIF = {
            id: parseInt(generateRandomCVV()),
            name: name,
            cardNum: generateRandomCardNumber().toString(),
            cvv: parseInt(generateRandomCVV()),
            expDate: randomDebitCardExpiration(),
            isFreeze: false,
        };
        dispatch({
            type: "add_card",
            data: addedCard,
        });
    };

    return (
        <>
            <Box
                sx={{
                    color: "white",
                    padding: "1em",
                    paddingTop: "2em",
                }}
            >
                <div className="flex justify-between items-end">
                    <div>Account balance</div>
                    <div className="">
                        <HomeIcon sx={{ color: "#03D167" }} fontSize="large" />
                    </div>
                </div>
                <div className="flex justify-between pt-2">
                    <div className="flex gap-2 items-center">
                        <div
                            className="flex justify-center items-center w-12 h-6 rounded-md"
                            style={{ backgroundColor: "#03D167" }}
                        >
                            <Typography sx={{ fontSize: "0.8em" }}>
                                S$
                            </Typography>
                        </div>
                        <div className="text-2xl font-bold">3,000</div>
                    </div>
                    <div
                        className="flex justify-center items-end gap-1"
                        style={{ color: "#24CEFD" }}
                        onClick={handleClickOpen}
                    >
                        <div>
                            <AddCircleOutlineIcon
                                sx={{ color: "#24CEFD" }}
                                fontSize="small"
                            />
                        </div>
                        <div className="font-bold text-sm">New Card</div>
                    </div>
                </div>
            </Box>
            <AddCardDialog
                isAddNewCardDialogOpen={isAddNewCardDialogOpen}
                setIsAddNewCardDialogOpen={setIsAddNewCardDialogOpen}
                addCardOnSave={onAddCard}
            />
        </>
    );
};

export default Header;
