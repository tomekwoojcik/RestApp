import { createContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import CheckIcon from '@mui/icons-material/Check';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import { propsModel } from "../../interface/interfaceProps";
import GroupIcon from '@mui/icons-material/Group';
import CachedIcon from '@mui/icons-material/Cached';
  import LogoutIcon from '@mui/icons-material/Logout';

export interface MenuButtonModel {
  key: number;
  buttonName: string;
  routes: string;
  icons: any;
}  
interface UserModel {
  userButtons: MenuButtonModel[];
  supervisorButtons: MenuButtonModel[];
  personData: any;
  data: any;
  navigate: any;
  userRoleArr: string[];
}

const UserContext = createContext({} as UserModel);

export function UserProvider({ children }: propsModel) {
  const userData = new Data("user");
  const data = userData.getData();
  const nav = useNavigate();

  const userButtons: MenuButtonModel[] = [
    {
      key: 1,
      buttonName: "Plan your vacation.",
      routes: "plan",
      icons: <DataThresholdingIcon/>
    },
    {
      key: 2,
      buttonName: "Submit a leave request.",
      routes: "request",
      icons:<CheckIcon/>
    },
    {
      key: 3,
      buttonName: "Messages",
      routes: "messages",
      icons:<MessageIcon/>
    },
    {
      key: 4,
      buttonName: "User Details",
      routes: "userDetails", 
      icons:<PersonIcon/>
    },
    {
      key: 5,
      buttonName: "Logout",
      routes: "null", 
      icons:<LogoutIcon/>
    },
  ];


  const supervisorButtons: MenuButtonModel[] = [
  {
    key: 1,
    buttonName: "Workers list.",
      routes: "workersList",
    icons:<GroupIcon/>
  },
  {
    key: 2,
    buttonName: "Submit a leave request.",
    routes: "request",
    icons:<CachedIcon/>

  },
  {
    key: 3,
    buttonName: "Messages",
    routes: "messages",
    icons:<MessageIcon/>
  },
  {
    key: 4,
    buttonName: "User Details",
    routes: "userDetails",
    icons:<PersonIcon/>

  },
];
  const userRoleArr: string[] = data.company.role;

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
  const navigate = (routes: string) => nav(routes);
  
  useEffect(()=>{},[])
  

  return (
    <UserContext.Provider
      value={{
        userButtons,
        personData,
        data,
        navigate,
        supervisorButtons,
        userRoleArr,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
