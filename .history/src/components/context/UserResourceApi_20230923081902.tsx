import { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { UserModel } from "../../interface/responseModel";

export interface UsersResourceModel {
  filter(arg0: (obj: UserModel) => boolean): UsersResourceModel[];
  map(arg0: (obj: UserModel) => object): any;
  usersResource: UserModel[];
}

export const getUsersResource = async (
    resClientToken: string | null,
): Promise<AxiosResponse<UsersResourceModel>> => {
  try {
    const response: AxiosResponse<UserModel[]> = await client.get<
      UserModel[]
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
