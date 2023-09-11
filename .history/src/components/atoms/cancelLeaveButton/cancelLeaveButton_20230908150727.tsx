import { Button } from "@mui/material";
import { FC } from "react";

interface stateModel {
    props:string
}

const CancelLeaveButton : FC<stateModel> = (state) => <Button variant="contained">{"Cancel Leave"}</Button>

export default CancelLeaveButton