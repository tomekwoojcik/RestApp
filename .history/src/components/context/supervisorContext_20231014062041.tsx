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
import { leaveObjModel } from "./userLeaveRequestContext";

interface supervisorMenuObj {
  text: string;
}
export interface SupervisorModel {
  state: {
    subordinatesArr: UserModel[];
    page: number;
    rowsPerPage: number;
    employeeLeave: leaveObjModel[];
    employeeObj: any;
    toggleRender: boolean;
    rejectRestArr: leaveObjModel[];
  };
  tableHeaders: string[];
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  getEmployeeLeave: (obj: UserModel) => void;
  employeeLeaveTableHeaders: string[];
  filterLeaveEmployee: (subordinatesObj: UserModel) => void;
  handlePreviousPage: (previousPage: string) => void;
  supervisorMenu: supervisorMenuObj;
  handleMenuAction: (buttonName: string, leaveId: string) => void;
  arrFormOptionStatus: object[];
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
  const leaveData = new Data("leaveConfirm");
  const getEmployeeLeaveObj = new Data("getEmployeeLeaveObj");
  const supervisorEmployeeLeaveObjConfirm = new Data(
    "supervisorEmployeeLeaveObjConfirm",
  );
  const rejectRestArr = new Data("rejectRestArr");
  const navigate = useNavigate();

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

  const filterLeaveEmployee = (userObj: UserModel) => {
    const data: leaveObjModel[] = leaveData
      .getData()
      .filter((obj: leaveObjModel) => obj.personId == userObj.id);
    dispatch({
      type: REDUCER_ACTION_TYPE.GET_EMPLOYEE_LEAVE,
      payload: data,
    });
  };

  const getEmployeeLeave = (userObj: UserModel) => {
    navigate("employeeLeave");
    getEmployeeLeaveObj.setData(userObj);
  };

  const employeeLeaveTableHeaders: string[] = [
    "Start date leave.",
    "End date leave.",
    "Kind of leave.",
    "Employee's leave request status.",
    "Replacement person.",
    "Supervisor approval request status.",
    "Supervisor comment.",
  ];
  const handlePreviousPage = (previousPage: string): void =>
    navigate(previousPage);

  const supervisorMenu: supervisorMenuObj = {
    text: "supervisorMenu",
  };
  const handleMenuAction = (buttonName: string, leaveId: string) => {
    switch (buttonName) {
      case "confirm": {
        const [leaveObj] = leaveData
          .getData()
          .filter((leaveObj: leaveObjModel) => {
            return leaveObj.leaveId == leaveId;
          });

        const arr = leaveData.getData().filter((leaveObj: leaveObjModel) => {
          return leaveObj.leaveId != leaveId;
        });

        leaveObj.supervisorApprovalStatus = "leave confirm";
        leaveObj.supervisorComment = "have a good rest";
        const getArrSupervisorEmployeeLeaveObjConfirm: [
          ,
        ] = supervisorEmployeeLeaveObjConfirm.getData();
        const setArrSupervisorEmployeeLeaveObjConfirm: leaveObjModel[] = [
          ...getArrSupervisorEmployeeLeaveObjConfirm,
          leaveObj,
        ];
        supervisorEmployeeLeaveObjConfirm.setData(
          setArrSupervisorEmployeeLeaveObjConfirm,
        );
        leaveData.setData(arr);
        dispatch({
          type: REDUCER_ACTION_TYPE.TOGGLE_RENDER,
          payload: true,
        });
        break;
      }
      case "reject": {
        navigate("rejectRest");
        const arrLeaveObj: leaveObjModel[] = leaveData
          .getData()
          .filter((leaveObj: leaveObjModel) => {
            return leaveObj.leaveId == leaveId;
          });
        rejectRestArr.setData(arrLeaveObj);
        dispatch({
          type: REDUCER_ACTION_TYPE.TOGGLE_RENDER,
          payload: true,
        });
        dispatch({
          type: REDUCER_ACTION_TYPE.REJECT_REST_ARR,
          payload: arrLeaveObj,
        });

        break;
      }
    }
  };

  const arrFormOptionStatus: object[] = [
    {
      frontText: "Reject the application",
      value:"reject"
    },
    {
      frontText: "The request for leave is awaiting a response",
      value:""
    }
    
  ];

  return (
    <SupervisorContext.Provider
      value={{
        state,
        tableHeaders,
        handleChangePage,
        handleChangeRowsPerPage,
        getEmployeeLeave,
        employeeLeaveTableHeaders,
        filterLeaveEmployee,
        handlePreviousPage,
        supervisorMenu,
        handleMenuAction,
        arrFormOptionStatus,
      }}
    >
      {children}
    </SupervisorContext.Provider>
  );
}