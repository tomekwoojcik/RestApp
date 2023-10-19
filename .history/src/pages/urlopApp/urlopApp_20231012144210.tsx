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
import Layout from "../../components/atoms/layout/Layout";
import RequireAuth, {
  EmployeeRole,
} from "../../components/molecules/requireAuth/RequireAuth";
import UnauthorizedPage from "../../components/organisms/unauthorizedPage/unauthorizedPage";
import EmployeeLeave from "../../components/organisms/employeeLeave/employeeLeave";
import RejectRest from "../../components/molecules/rejectRest/rejectRest";

const UrlopApp: FC = () => {
  const data = new Data("user");

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPages />} />
          <Route path="recoveryPassword" element={<RecoveryPassword />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route
            element={<RequireAuth allowedRole={[EmployeeRole.Employee]} />}
          >
            <Route path="user" element={<UserPage />}>
              <Route
                element={<RequireAuth allowedRole={[EmployeeRole.Employee]} />}
              >
                <Route path="userDetails" element={<UserDetails />} />
              </Route>
              <Route
                element={<RequireAuth allowedRole={[EmployeeRole.Employee]} />}
              >
                <Route path="messages" element={<UserMessage />} />
              </Route>
              <Route
                element={<RequireAuth allowedRole={[EmployeeRole.Employee]} />}
              >
                <Route path="request" element={<UserLeaveRequest />} />
              </Route>
              <Route
                element={<RequireAuth allowedRole={[EmployeeRole.Employee]} />}
              >
                <Route path="plan" element={<UserPlan />} />
              </Route>
              <Route
                element={
                  <RequireAuth
                    allowedRole={[
                      EmployeeRole.Director,
                      EmployeeRole.Supervisor,
                    ]}
                  />
                }
              >
                <Route path="workersList" element={<WorkersList />} />
              </Route>
              <Route
                element={
                  <RequireAuth
                    allowedRole={[
                      EmployeeRole.Director,
                      EmployeeRole.Supervisor,
                    ]}
                  />
                }
              >
                <Route
                  path="workersList/employeeLeave"
                  element={<EmployeeLeave />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth
                    allowedRole={[
                      EmployeeRole.Director,
                      EmployeeRole.Supervisor,
                    ]}
                  />
                }
              >
                <Route
                  path="workersList/employeeLeave/rejectRest"
                  element={<RejectRest />}
                />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default UrlopApp;