import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { CardInfoIF } from "../../utils/Modal";
import { formatDigits } from "../../utils/Index";

const Cards = ({ cardDetails }: { cardDetails: CardInfoIF }) => {
    const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false);

    const first12Ditigs = formatDigits(cardDetails.cardNum);
    const last4Digits = cardDetails.cardNum.slice(12);

    const handleShowCard = () => {
        console.log("first");
        setIsCardDetailsVisible(
            (isCardDetailsVisible) => !isCardDetailsVisible
        );
    };
    return (
        <>
            <div
                className="flex justify-end relative top-5"
                style={{
                    opacity: cardDetails.isFreeze ? "60%" : "",
                    visibility: cardDetails.isFreeze ? "hidden" : "initial",
                }}
            >
                <div
                    className="h-12 bg-white rounded-lg flex justify-center gap-1 px-1"
                    style={{ width: "50%", color: "#03D167" }}
                    onClick={handleShowCard}
                >
                    <div>
                        {isCardDetailsVisible ? (
                            <VisibilityIcon fontSize="small" />
                        ) : (
                            <VisibilityOffIcon fontSize="small" />
                        )}
                    </div>
                    <div className="text-xs pt-1">Show card number</div>
                </div>
            </div>
            <div
                className="relative rounded-xl px-6 py-4 font-bold z-100"
                style={{
                    backgroundColor: "#03D167",
                    color: "white",
                    height: 220,
                    opacity: cardDetails.isFreeze ? "60%" : "",
                }}
            >
                <div>
                    <div className="card-logo flex justify-end">
                        <div>
                            <HomeIcon />
                        </div>
                        <div>aspire</div>
                    </div>
                    <div className="font-bold">
                        <div className="pb-6 pt-4 text-2xl">
                            {cardDetails.name}
                        </div>
                        <div className="flex items-end pb-4 gap-1 h-8 font-bold">
                            <Typography>
                                {isCardDetailsVisible &&
                                !cardDetails.isFreeze ? (
                                    first12Ditigs
                                ) : (
                                    <p className="text-xl">xxxx xxxx xxxx</p>
                                )}
                            </Typography>
                            <Typography>{last4Digits}</Typography>
                        </div>
                        <div className="flex gap-4 items-center font-bold">
                            <Typography
                                sx={{ fontSize: "0.8em", fontWeight: "bold" }}
                            >
                                Thru: {cardDetails.expDate}
                            </Typography>
                            <Typography
                                sx={{ fontSize: "0.8em", fontWeight: "bold" }}
                            >
                                CVV:{" "}
                                {isCardDetailsVisible && !cardDetails.isFreeze
                                    ? cardDetails.cvv
                                    : "***"}
                            </Typography>
                        </div>
                        <div className="flex justify-end">VISA</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
