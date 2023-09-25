import axios, { AxiosResponse } from "axios";
import { client } from "./userLoginApi";
import { ResClientModel } from "./getLoggedUser";
import { UserModel } from "../../interface/responseModel";

interface UsersResourceModel {
  usersResource: UserModel[];
}

export const usersResourceApi = async (
  resClient: ResClientModel,
): Promise<UsersResourceModel> => {
    try {
        const response: AxiosResponse<ResClientModel> = await client.get<UsersResourceModel>(`400/`)
        
    } catch (error:any) {
        
    }
};
