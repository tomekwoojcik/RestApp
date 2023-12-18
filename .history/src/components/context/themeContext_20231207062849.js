import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3cb994",
            light: "#63c7a9",
            dark: "#63c7a9",
        },
        secondary: {
            main: "#222c3e",
            light: "#4e5664",
            dark: "#171e2b",
        },
    },
    paper: {
        display: "block",
        overflowX: 'auto',
    },
});

export default theme;
