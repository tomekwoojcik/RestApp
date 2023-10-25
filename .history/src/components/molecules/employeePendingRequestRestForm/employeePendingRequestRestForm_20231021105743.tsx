import { FormControl, TextField } from '@mui/material'
import {FC} from 'react'

const EmployeePendingRequestRestForm:FC = () => {
    return (
        <FormControl>
            <TextField label="Request" variant="filled" />

       </FormControl>
    )
}

export default EmployeePendingRequestRestForm