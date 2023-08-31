import axios, {AxiosResponse} from "axios";
import { UserModel } from "../../interface/responseModel";
import { userModel } from "../../interface/userModel";
interface ResClientModel {
    accessToken: string;
    user: UserModel;  
}

const client = axios.create({
    baseURL:"http://localhost:3000/"
})

export const getLoggedUser = async (
  resClient: ResClientModel,
): Promise<userModel> => 
  try {
  const response: AxiosResponse<ResClientModel> = await client.get<ResClientModel>(`600/users/${resClient.user.id}`)
  const resUser: userModel = response.data.user;
  return resUser;
}
  catch (error) {
  throw error
}
}
};




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
