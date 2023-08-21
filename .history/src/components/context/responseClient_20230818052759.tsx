import { ResponseModel } from "../../interface/responseModel";

export const responseClient = async (email: string, password: string) => {
    const res: ResponseModel = await fetch(" http://localhost:3000/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: `${email}`,
            password: `${password}`,
        }),
    }).then(response => response.json());

    return res;
}