import { FormControl, TextField } from '@mui/material'
import {FC} from 'react'

const EmployeePendingRequestRestForm:FC = () => {
    return (
        <FormControl>
            <TextField maxRows={5} multiline label="Request form" variant="filled" />

       </FormControl>
    )
}

export default EmployeePendingRequestRestForm