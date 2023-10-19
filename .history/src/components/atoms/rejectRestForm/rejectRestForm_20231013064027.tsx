import { Button, FormControl, Input } from "@mui/material";
import { FC } from "react";

const RejectRestForm: FC = () => {
    return (
        <FormControl >
            <Input type="text" aria-label=""></Input>
            <Button variant="contained">Send Message</Button>
        </FormControl>
    );
};

export default RejectRestForm;
