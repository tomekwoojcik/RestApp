import { Button } from "@mui/material";
import { FC, useContext } from "react";


interface stateModel {
    props:string
}

const CancelLeaveButton: FC<stateModel> = (state) => {
    const {} = useContext()
    return (
         <Button variant="contained">{"Cancel Leave"}</Button>
    )
}

export default CancelLeaveButton