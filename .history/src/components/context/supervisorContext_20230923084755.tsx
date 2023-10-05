import { createContext } from "react";
import { propsModel } from "../../interface/interfaceProps";
import { MenuButtonModel } from "./userContext";
import { getUsersResource } from "./UserResourceApi";
import Data from "./localhostContext";
import { UserModel } from "../../interface/responseModel";

export interface SupervisorModel {
  x: string;
  subordinatesArr: UserModel[];
}

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

export async function SupervisorProvider({ children }: propsModel) {
  const x: string = "cccc";

  const userToken: string | any = localStorage.getItem("userToken");
  const userData = new Data("user");
  const getUserData: UserModel = userData.getData();
  const subordinatesArr: UserModel[] = (
    await getUsersResource(userToken)
  ).data.filter(
    (userObj: UserModel) =>
      userObj.company && userObj.company.supervisorId == getUserData.id,
  );
  console.log();

  return (
    <SupervisorContext.Provider value={{ subordinatesArr }}>
      {children}
    </SupervisorContext.Provider>
  );
}