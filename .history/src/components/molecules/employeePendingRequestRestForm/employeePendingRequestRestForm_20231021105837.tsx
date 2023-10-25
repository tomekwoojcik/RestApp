import { FormControl, TextField } from '@mui/material'
import {FC} from 'react'

const EmployeePendingRequestRestForm:FC = () => {
    return (
        <FormControl>
            <TextField size='medium' label="Request form" variant="filled" />

       </FormControl>
    )
}

export default EmployeePendingRequestRestForm