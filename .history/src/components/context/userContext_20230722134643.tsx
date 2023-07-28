/* eslint-disable quotes */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { createContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from "react-router";
import Data from "./localhostContext";
import { props } from "../../interface/interfaceProps";

const UserContext = createContext({});

export function UserProvider({ children }:props) {
  const userData = new Data("user");
  const data = userData.getData();
  const nav = useNavigate();

  const userButtons = [
    {
      key: 1,
      buttonName: "Plan your vacation.",
      routes: "plan",
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
  const personData = {
    basicData: [
      `Name and surname of the employee: ${data.firstName} ${data.lastName}`,
      `Employ id: ${data.id}`,
      `Maiden name: ${data.maidenName}`,
      `Birth date: ${data.birthDate}`,
      `Gender: ${data.gender}`,
    ],
    addressData: [
      `Address: ${data.address.address}`,
      `Post code: ${data.address.postalCode}`,
      `City: ${data.address.city}`,
      `State: ${data.address.state}`,
    ],
    contactData: [`Work email: ${data.email}`, `Phone number: ${data.phone}`],
    jobData: [
      `Work department: ${data.company.department}`,
      `Position: ${data.company.title}`,
      `Workplace: ${data.company.address.address}, ${data.company.address.city}`,
    ],
    universityData: [`University: ${data.university}`],
    image: data.image,
  };

  const navigate = routes: any => nav(routes);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider
      value={{
        userButtons,
        personData,
        data,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
