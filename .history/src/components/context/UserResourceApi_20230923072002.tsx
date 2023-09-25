import { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { UserModel } from "../../interface/responseModel";

export interface UsersResourceModel {
  usersResource: UserModel[];
}

export const getUsersResource = async (
    resClientToken: string | null,
): Promise<AxiosResponse<UsersResourceModel>> => {
  try {
    const response: AxiosResponse<UsersResourceModel> = await client.get<
      UsersResourceModel
    >(`/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resClientToken}`,
        },
        responseType:"json",
    });
    return response;
    } catch (error:any) {
    throw error;
  }
};

