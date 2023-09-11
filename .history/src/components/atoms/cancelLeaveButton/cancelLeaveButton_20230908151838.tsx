import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";


interface stateModel {
    props:string
}

const CancelLeaveButton: FC<stateModel> = (state) => {
    const {cancelConfirmLeave} = useContext(UserLeaveRequestContext);
    return (
         <Button onClick={()=>{cancelConfirmLeave(state.props)}} variant="contained">{"Cancel Leave"}</Button>
    )
}

export default CancelLeaveButton