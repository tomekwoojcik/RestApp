import { Box, IconButton, ThemeProvider } from "@mui/material";
import { FC, useContext } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import theme from "../../context/themeContext";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

const TablePaginationLeaveRequestsAwaitingResponse: FC = () => {
  const { state, handleChangePage } = useContext(UserLeaveRequestContext);

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(event, state.page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(event, state.page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    handleChangePage(
      event,
      Math.max(
        0,
        Math.ceil(state.leaveRequestDataArr.length / state.rowsPerPage) - 1,
      ),
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={state.page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={state.page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={
            state.page >=
            Math.ceil(state.leaveRequestDataArr.length / state.rowsPerPage) - 1
          }
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={
            state.page >=
            Math.ceil(state.leaveRequestDataArr.length / state.rowsPerPage) - 1
          }
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    </ThemeProvider>
  );
    
    export default TablePaginationLeaveRequestsAwaitingResponse;
