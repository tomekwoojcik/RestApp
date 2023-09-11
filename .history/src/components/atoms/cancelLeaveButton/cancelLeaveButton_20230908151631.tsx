import { Button } from "@mui/material";
import { FC, createContext } from "react";


interface stateModel {
    props:string
}

const CancelLeaveButton: FC<stateModel> = (state) => {
    const {} = createContext()
    return (
         <Button variant="contained">{"Cancel Leave"}</Button>
    )
}

export default CancelLeaveButton