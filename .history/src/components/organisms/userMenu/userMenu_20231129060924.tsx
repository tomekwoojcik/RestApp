// import { Button } from "@mui/material";
// import { FC, useContext } from "react";
// import UserButtonsMenu from "../../molecules/userButtonsMenu/userButtonsMenu";
// import UserContext from "../../context/userContext";
// import UserMenuModule from "./UserMenu.module.scss";
// import { EmployeeRole } from "../../molecules/requireAuth/RequireAuth";

// const UserMenu: FC = () => {
//   const { data, userButtons, supervisorButtons, userRoleArr } = useContext(
//     UserContext,
//   );

//   const roleToggle: boolean[] = data.company.role.map((role: string) => {
//       return role === EmployeeRole.Director || role === EmployeeRole.Supervisor;
//   }).some((toggleEl: boolean) => toggleEl == true);


//   return (
//     <div>
//       <div className={UserMenuModule.companyLogo} />
//       <h3>
//         {`Hello ${!data ? undefined : `${data.firstName} ${data.lastName}`}`}
//       </h3>
//       <div>
//         <p>User Menu</p>
//         <UserButtonsMenu props={userButtons} />
//       </div>

//       { roleToggle ? 
//         (<div>
//           <p>Supervisor Menu</p>
//           <UserButtonsMenu props={supervisorButtons} />
//         </div>) :null
//       }
//       <Button>LogOff</Button>
//     </div>
//   );
// };

// export default UserMenu;
