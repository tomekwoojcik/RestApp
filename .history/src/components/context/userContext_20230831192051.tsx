import { createContext } from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";

import { propsModel } from "../../interface/interfaceProps";
interface UserModel {
  userButtons: object[];
  personData: any;
  data: any;
}

const UserContext = createContext({} as UserModel);

export function UserProvider({ children }: propsModel) {
  const userData = new Data("user");
  const data = userData.setData(useNavigate);
  const nav = useNavigate();

  const userButtons = [
    {
      key: 1,
      buttonName: "Plan your vacation.",
      routes: "plan",
    },
    {
      key: 3,
      buttonName: "Messages",
      routes: "messages",
    },
  ];
  const personData = {
    basicData: [
      `Name and surname of the employee: ${data.firstName} ${data.lastName}`,
      `Employ id: ${data.id}`,
      `Maiden name: ${data.maidenName}`,
      `Birth date: ${data.birthDate}`,
      `Gender: ${data.gender}`,
    ],
    contactData: [`Work email: ${data.email}`, `Phone number: ${data.phone}`],
    jobData: [
      `Work department: ${data.company.department}`,
      `Position: ${data.company.title}`,
      `Workplace: ${data.company.address.address}, ${data.company.address.city}`,
    ],
  };

  return (
    <UserContext.Provider
      value={{
        userButtons,
        personData,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
