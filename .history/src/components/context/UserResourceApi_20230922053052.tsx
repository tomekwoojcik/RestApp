import axios from "axios";
import { client } from "./userLoginApi";
import { ResClientModel } from "./getLoggedUser";
import { UserModel } from "../../interface/responseModel";

interface UsersResourceModel {
  usersResource: UserModel[];
}

export const usersResourceApi = async (
  resClient: ResClientModel,
): Promise<UsersResourceModel> => {};
