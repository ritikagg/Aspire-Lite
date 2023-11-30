import { useState } from "react";

import ViewDayIcon from "@mui/icons-material/ViewDay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Collapse } from "@mui/material";
import TransactionDetails from "./TransactionDetails";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const History = () => {
    const [expendedCard, setExpendedCard] = useState({
        isExpended: true,
        cardType: "",
    });

    const onClickCollapseHandler = (cardType: string) => {
        if (cardType === expendedCard.cardType) {
            setExpendedCard((expendedCard) => ({
                isExpended: !expendedCard.isExpended,
                cardType: cardType || "",
            }));
        } else {
            setExpendedCard(() => ({
                isExpended: true,
                cardType: cardType || "",
            }));
        }
    };

    return (
        <div className="p-6 pb-32 bg-white">
            <div
                className="p-2 rounded-md my-4"
                style={{
                    backgroundColor: "#FBFCFF",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
            >
                <div className="p-2 flex justify-between">
                    <div className="flex gap-2" style={{ color: "#0D365A" }}>
                        <div>
                            <ViewDayIcon />
                        </div>
                        <div>Card details</div>
                    </div>
                    <div
                        className="w-6 h-6  flex justify-center items-center rounded-full"
                        style={{ backgroundColor: "#DCE4F3" }}
                    >
                        <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </div>
                </div>
            </div>

            <div onClick={() => onClickCollapseHandler("TRANSACTIONS")}>
                <div
                    className="p-2 rounded-md"
                    style={{
                        backgroundColor: "#FBFCFF",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }}
                >
                    <div className="p-2 flex justify-between">
                        <div
                            className="flex gap-2"
                            style={{ color: "#0D365A" }}
                        >
                            <div>
                                <SyncAltIcon />
                            </div>
                            <div>Recent transactions</div>
                        </div>
                        <div
                            className="w-6 h-6  flex justify-center items-center rounded-full"
                            style={{ backgroundColor: "#DCE4F3" }}
                        >
                            {expendedCard.isExpended ? (
                                <KeyboardArrowUpIcon sx={{ color: "white" }} />
                            ) : (
                                <KeyboardArrowDownIcon
                                    sx={{ color: "white" }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Collapse
                    in={
                        // expendedCard.cardType === "TRANSACTIONS" &&
                        expendedCard.isExpended
                    }
                >
                    <TransactionDetails />
                </Collapse>
            </div>
        </div>
    );
};

export default History;
