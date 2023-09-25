import { ResponseModelData } from "../../interface/responseModel";
import axios from "axios";

export const client = axios.create({
    baseURL:"http://localhost:3000/"
})

export const userLoginApi = async (email: string, password: string) => {
    const res: ResponseModelData = await client.post('/login',{
        email: `${email}`,
        password:`${password}`
    });
    return res
}