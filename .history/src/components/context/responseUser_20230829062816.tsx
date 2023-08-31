import axios, {AxiosResponse} from "axios";
import { ResponseModel, ResponseModelData, UserModel } from "../../interface/responseModel";
import { userModel } from "../../interface/userModel";
interface ResClientModel {
    accessToken: string;
    user: UserModel;  
}

const client = axios.create({
    baseURL:"http://localhost:3000/"
})

export const getLoggedUser = async (resClient:ResponseModelData) => {
  try {
    
  } catch (error) {
    throw error;
  }
}




// export const getLoggedUser = async (
//   resClient: ResClientModel,
// ): Promise<userModel> => {
//   const token = localStorage.getItem("token")
//   console.log(token);
//   const resUser: userModel = await fetch(
//     ` http://localhost:3000/600/users/${resClient.user.id}`,
//     {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${resClient.accessToken}`,
//       },
//     },
//   ).then(response => response.json());

//   return resUser;
// };
