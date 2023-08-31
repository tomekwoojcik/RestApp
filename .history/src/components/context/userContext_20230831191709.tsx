import { createContext } from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";

import { propsModel } from "../../interface/interfaceProps";
interface UserModel {
  userButtons: object[];
  personData: any;
  data: object;
}

const UserContext = createContext({} as UserModel);

export function UserProvider({ children }: propsModel) {
  const userData = new Data("user");
  const data = userData.getData();
  const nav = useNavigate();

  const userButtons = [
    {
      key: 2,
      buttonName: "Submit a leave request.",
      routes: "request",
    },

    {
      key: 4,
      buttonName: "User Details",
      routes: "userDetails",
    },
  ];
  const personData = {

    addressData: [
      `Address: ${data.address.address}`,
      `Post code: ${data.address.postalCode}`,
      `City: ${data.address.city}`,
      `State: ${data.address.state}`,
    ],
    contactData: [`Work email: ${data.email}`, `Phone number: ${data.phone}`],
    universityData: [`University: ${data.university}`],
    image: data.image,
  };
  const navigate = (routes: string) => nav(routes);

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
