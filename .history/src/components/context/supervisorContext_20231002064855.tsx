import { createContext, useEffect, useReducer } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource } from "./UserResourceApi";
import Data from "./localhostContext";
import { UserModel } from "../../interface/responseModel";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../hooks/supervisorHooks";
import { useNavigate } from "react-router";
export interface SupervisorModel {
  state: {
    subordinatesArr: UserModel[];
    page: number;
    rowsPerPage: number;
  };
  tableHeaders: string[];
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  getEmployeeLeave : (obj:UserModel) => void
  
}
const userToken: string | any = localStorage.getItem("userToken");

const userData = new Data("user");
const getUserData: UserModel = userData.getData();
export const subordinatesArr: UserModel[] = (
  await getUsersResource(userToken)
).data.filter(
  (userObj: UserModel) =>
    userObj.company && userObj.company.supervisorId == getUserData.id,
);

export const supervisorButtons: MenuButtonModel[] = [
  {
    key: 1,
    buttonName: "Workers list.",
    routes: "workersList",
  },
  {
    key: 2,
    buttonName: "Submit a leave request.",
    routes: "request",
  },
  {
    key: 3,
    buttonName: "Messages",
    routes: "messages",
  },
  {
    key: 4,
    buttonName: "User Details",
    routes: "userDetails",
  },
];

export const SupervisorContext = createContext({} as SupervisorModel);

export function SupervisorProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const nav = useNavigate();
  
  useEffect(() => {
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_SUBORDINATES,
      payload: subordinatesArr,
    });
  }, []);

  const tableHeaders: string[] = [
    "Employee first name and surname",
    "Employee id",
    "Employee department",
    "Employee title",
    "Employee role",
    "Employee email",
    "Employee phone number",
  ];

  const emptyRows =
    state.page > 0
      ? Math.max(
          0,
          (1 + state.page) * state.rowsPerPage - state.subordinatesArr.length,
        )
      : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_CHANGE_PAGE,
      payload: newPage,
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_CHANGE_ROWS_PER_PAGE,
      payload: parseInt(event.target.value, 10),
    });
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_CHANGE_PAGE,
      payload: 0,
    });
  };

  const getEmployeeLeave = (obj:UserModel) => {
    nav("employeeLeave");
    
  }

  return (
    <SupervisorContext.Provider
      value={{
        state,
        tableHeaders,
        handleChangePage,
        handleChangeRowsPerPage,
        getEmployeeLeave,
      }}
    >
      {children}
    </SupervisorContext.Provider>
  );
}