import { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { UserModel } from "../../interface/responseModel";

export const getUsersResource = async (
  resClientToken: string | null,
): Promise<AxiosResponse<UserModel[]>> => {
  try {
    const response: AxiosResponse<UserModel[]> = await client.get<UserModel[]>(
      `/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resClientToken}`,
        },
        responseType: "json",
      },
    );
    const data = await response;
    return data;
  } catch (error:any) {
    throw error;
  }
};
