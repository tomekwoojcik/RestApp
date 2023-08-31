import { ResponseModel } from "../../interface/responseModel";
import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:3000/"
})

export const userLoginApi = async (email: string, password: string) => {
    const res: ResponseModel = await client.post('/login',{
        email: `${email}`,
        password:`${password}`
    });
    return await res
}
 
const response = userLoginApi("atuny2@sohu.com", "$2a$10$Rcspuk29R4g7yAgQzbmJgevw5uXzOg1ydEYDeatH4HFD6AAT3xZYG");

console.log(response);


// import { ResponseModel } from "../../interface/responseModel";
// import axios from "axios";

// const client = axios.create({
//     baseURL:"http://localhost:3000"
// })

// export const userLoginApi = async (email: string, password: string): Promise<ResponseModel> => {
//     const res: ResponseModel = await fetch("http://localhost:3000/login", {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             email: `${email}`,
//             password: `${password}`,
//         }),
//     }).then(response => response.json());

//     return res;
// }