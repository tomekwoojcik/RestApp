import { FormControl, TextField } from '@mui/material'
import {FC} from 'react'

const EmployeePendingRequestRestForm:FC = () => {
    return (
        <FormControl>
            <TextField rows={5} col multiline label="Request form" variant="filled" />

       </FormControl>
    )
}

export default EmployeePendingRequestRestForm