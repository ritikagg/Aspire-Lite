import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import CardCarousel from "../Carousel/CardCarousel";
import { CardInfoIF } from "../../utils/Modal";
import { useDispatch, useRootState } from "../../store";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const NavigationTabs = () => {
    const { cards } = useRootState();
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch({
            type: "set_tab",
            data: { id: newValue === 0 ? "my_cards" : "all_crads" },
        });
        setValue(newValue);
    };

    const onSetVisibleCard = (card: CardInfoIF) => {
        dispatch({ type: "select_card", data: { id: card.id } });
    };

    return (
        <Box className="flex flex-col h-full pt-4">
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="header tabs"
                >
                    <Tab
                        label="My debit cards"
                        {...a11yProps(0)}
                        sx={{ textTransform: "none", color: "white" }}
                    />
                    <Tab
                        label="All company cards"
                        {...a11yProps(1)}
                        sx={{ textTransform: "none" }}
                    />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CardCarousel
                        cardList={cards}
                        setVisibleCard={onSetVisibleCard}
                    />
                </TabPanel>
            </Box>
        </Box>
    );
};

export default NavigationTabs;
