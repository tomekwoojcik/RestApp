import axios, { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { ResClientModel } from "./getLoggedUser";
import { UserModel } from "../../interface/responseModel";

interface UsersResourceModel {
  usersResource: UserModel[];
}

export const getUsersResource = async (
  resClient: ResClientModel,
): Promise<UsersResourceModel> => {
  try {
    const response: AxiosResponse<UsersResourceModel> = await client.get<
      UsersResourceModel
    >(`440/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resClient.accessToken}`,
      },
    });
      const resDataUser: any = response;
    return resDataUser;
  } catch (error) {
    throw error;
  }
};