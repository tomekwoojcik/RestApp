import { userModel } from "../../interface/userModel";
export const ResponseUser = async (resClient) => {
    const resUser: userModel = await fetch(
        ` http://localhost:3000/600/users/${(await resClient).user.id}`,
        {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${(await resClient).accessToken}`,
            },
        },
    ).then(response => response.json());

    return resUser;
}

