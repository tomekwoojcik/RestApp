import axios, { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { ResClientModel } from "./getLoggedUser";
import { UserModel } from "../../interface/responseModel";

interface UsersResourceModel {
  usersResource: UserModel[];
}

export const getLoggedUser = async (
  resClient: ResClientModel,
): Promise<UsersResourceModel> => {
  try {
    const response: AxiosResponse<UsersResourceModel> = await client.get<
      UsersResourceModel
    >(`600/users/${resClient.user.id}`, {
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