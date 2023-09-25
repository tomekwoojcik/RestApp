import axios, { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { ResClientModel } from "./getLoggedUser";
import { UserModel } from "../../interface/responseModel";

interface UsersResourceModel {
  usersResource: UserModel[];
}

export const getUsersResource = async (
  resClientToken: string,
): Promise<UsersResourceModel> => {
  try {
    const response: AxiosResponse<UsersResourceModel> = await client.get<
      UsersResourceModel
    >(`/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resClientToken}`,
      },
    });
      const resDataUser: any = response;
    return resDataUser;
    } catch (error:any) {
    throw error;
  }
};