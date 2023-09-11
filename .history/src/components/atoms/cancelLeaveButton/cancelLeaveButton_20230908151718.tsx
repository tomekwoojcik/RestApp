import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";


interface stateModel {
    props:string
}

const CancelLeaveButton: FC<stateModel> = (state) => {
    const { } = useContext(UserLeaveRequestContext);
    return (
         <Button variant="contained">{"Cancel Leave"}</Button>
    )
}

export default CancelLeaveButton