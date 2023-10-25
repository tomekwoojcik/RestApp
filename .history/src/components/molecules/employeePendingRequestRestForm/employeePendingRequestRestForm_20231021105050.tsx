import { FormControl, TextField } from '@mui/material'
import {FC} from 'react'

const EmployeePendingRequestRestForm:FC = () => {
    return (
        <FormControl>
            <TextField id="filled-basic" label="Filled" variant="filled" />

       </FormControl>
    )
}

export default EmployeePendingRequestRestForm