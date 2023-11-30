import { Box } from "@mui/material";
import Header from "./patterns/Header/Header";
import NavigationTabs from "./components/Navigation/NavigationTabs";

export const Home = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#0D365A",
                position: "fixed",
                height: "100%",
                width: "100%",
                zIndex: -1,
                maxWidth: 500,
            }}
        >
            <Header />
            <NavigationTabs />
        </Box>
    );
};
