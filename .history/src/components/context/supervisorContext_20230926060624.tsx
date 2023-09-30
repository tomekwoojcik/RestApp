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
import { TableCell, styled, tableCellClasses } from "@mui/material";
export interface SupervisorModel {
  state: {
    subordinatesArr: UserModel[];
  };
  tableHeaders: string[];
  StyledTableCell: any
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
  const userData = new Data("user");
  const getUserData: UserModel = userData.getData();
  // const subordinatesArr: UserModel[] = (
  //   await getUsersResource(userToken)
  // ).data.filter(
  //   (userObj: UserModel) =>
  //     userObj.company && userObj.company.supervisorId == getUserData.id,
  // );
  // useEffect(() => {
  //   dispatch({
  //     type: REDUCER_ACTION_TYPE.GET_SUBORDINATES,
  //     payload: subordinatesArr,
  //   });
  // }, []);

  const tableHeaders: string[] = [
    "Employee first name and surname",
    "Employee id",
    "Employee department",
    "Employee title",
    "Employee role",
    "Employee email",
    "Employee phone number"
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

  return (
    <SupervisorContext.Provider value={{ state, tableHeaders, StyledTableCell }}>
      {children}
    </SupervisorContext.Provider>
  );
}
