import { UserModel } from "../../interface/responseModel";
import { userModel } from "../../interface/userModel";
interface ResClientModel {
  accessToken: string;
  user: UserModel;
}
export const responseUser = async (resClient: ResClientModel) => {
  const resUser: userModel = await fetch(
    ` http://localhost:3000/600/users/${(await resClient).user.id}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await resClient).accessToken}`,
      },
    },
  ).then(response => response.json());

  return resUser;
};
