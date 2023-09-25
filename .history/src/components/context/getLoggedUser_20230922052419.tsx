import axios, { AxiosResponse } from "axios";
import {
  UserModel,
} from "../../interface/responseModel";
import { userModel } from "../../interface/userModel";
import { client } from "./userLoginApi";
interface ResClientModel {
  accessToken: string;
  user: UserModel;
}

export const getLoggedUser = async (
  resClient: ResClientModel,
): Promise<userModel> => {
  try {
    const response: AxiosResponse<ResClientModel> = await client.get<
      ResClientModel
    >(`600/users/${resClient.user.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resClient.accessToken}`,
      },
    });
    const resUser: userModel = response.data.user;
    return resUser;
  } catch (error) {
    throw error;
  }
};

