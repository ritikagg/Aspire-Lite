import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    CssBaseline,
    Paper,
} from "@mui/material";
import React, { useRef, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PersonIcon from "@mui/icons-material/Person";

export const BottomTab = () => {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    // width: 500,
                }}
                elevation={0}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ width: 500, borderTop: "1px solid #ccc" }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction
                        label="Cards"
                        icon={<CreditCardIcon />}
                    />
                    <BottomNavigationAction
                        label="Payments"
                        icon={<PaymentsIcon />}
                    />
                    <BottomNavigationAction
                        label="Credit"
                        icon={<ArrowCircleUpIcon />}
                    />
                    <BottomNavigationAction
                        label="Profile"
                        icon={<PersonIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};
