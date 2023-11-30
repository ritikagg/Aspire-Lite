import React from "react";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import CampaignIcon from "@mui/icons-material/Campaign";
import WalletIcon from "@mui/icons-material/Wallet";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const dummyTrnx = [
    {
        name: "Hamleys",
        icon: <StoreMallDirectoryIcon sx={{ color: "#009DFF" }} />,
        iconBg: "#E5F5FF",
        txnDate: "20 May 2020",
        txnType: 1, // 0: Debit, 1: Credit
        amount: 150,
    },
    {
        name: "Airport",
        icon: <AirplaneTicketIcon sx={{ color: "#00D6B6" }} />,
        iconBg: "#E4FCF7",
        txnDate: "20 May 2020",
        txnType: 1, // 0: Debit, 1: Credit
        amount: 600,
    },
    {
        name: "Music",
        icon: <CampaignIcon sx={{ color: "#F25195" }} />,
        iconBg: "#FEEDF4",
        txnDate: "20 May 2020",
        txnType: 0, // 0: Debit, 1: Credit
        amount: 150,
    },
    {
        name: "Hamleys",
        icon: <StoreMallDirectoryIcon sx={{ color: "#009DFF" }} />,
        iconBg: "#E5F5FF",
        txnDate: "20 May 2020",
        txnType: 0, // 0: Debit, 1: Credit
        amount: 150,
    },
];
const TransactionDetails = () => {
    return (
        <div className="flex flex-col gap-3 pt-4 border-x">
            {dummyTrnx.map((txnObj) => {
                return (
                    <div className="flex justify-between pb-2 border-b px-4 items-start">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-12 h-12 rounded-full flex justify-center items-center"
                                style={{ backgroundColor: `${txnObj.iconBg}` }}
                            >
                                <div>{txnObj.icon}</div>
                            </div>
                            <div>
                                <div>{txnObj.name}</div>
                                <div
                                    style={{
                                        color: "#CACACA",
                                        fontSize: "0.9em",
                                    }}
                                >
                                    {txnObj.txnDate}
                                </div>
                                <div
                                    className="flex gap-2 items-center py-2"
                                    style={{
                                        color: "#325BB0",
                                        fontSize: "0.8em",
                                    }}
                                >
                                    <div
                                        className="w-8 h-6 flex justify-center items-center rounded-xl"
                                        style={{ backgroundColor: "#325BB0" }}
                                    >
                                        <WalletIcon
                                            sx={{
                                                color: "white",
                                                fontSize: "1.2em",
                                            }}
                                        />
                                    </div>
                                    {txnObj.txnType === 1
                                        ? "Refund on"
                                        : "Charged to"}{" "}
                                    debit card
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex items-center text-sm font-bold pt-1"
                            style={{
                                color: `${
                                    txnObj.txnType === 1 ? "#03D167" : "#222222"
                                }`,
                            }}
                        >
                            <div>
                                {txnObj.txnType === 1 ? "+" : "-"} S${" "}
                                {txnObj.amount}
                            </div>
                            <NavigateNextIcon sx={{ color: "#E3E3E3" }} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TransactionDetails;
