import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import LoginPages from "../loginPage/loginPage";
import theme from "../../components/context/themeContext";
import RecoveryPassword from "../recoveryPassword/recoveryPassword";
import UserPage from "../userPage/userPage";
import UserDetails from "../../components/organisms/userDetails/userDetails";
import UserMessage from "../../components/organisms/userMessage/userMessage";
import UserLeaveRequest from "../../components/organisms/userLeaveRequest/userLeaveRequest";
import UserPlan from "../../components/organisms/userPlan/userPlan";
import WorkersList from "../../components/organisms/workersList/workersList";
import { FC } from "react";
import Data from "../../components/context/localhostContext";

const UrlopApp: FC = () => {

  const data = Data()

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="recoveryPassword" element={<RecoveryPassword />} />
        <Route path="/user" element={<UserPage />}>
          <Route path="userDetails" element={<UserDetails />} />
          <Route path="messages" element={<UserMessage />} />
          <Route path="request" element={<UserLeaveRequest />} />
          <Route path="plan" element={<UserPlan />} />
          <Route path="workersList" element={<WorkersList />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default UrlopApp;
