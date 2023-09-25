import axios, { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { UserModel } from "../../interface/responseModel";

export interface UsersResourceModel {
  usersResource: UserModel[];
}

export const getUsersResource = async (
    resClientToken: string | null,
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
      const resDataUser: UsersResourceModel = response;
    return resDataUser;
    } catch (error:any) {
    throw error;
  }
};

