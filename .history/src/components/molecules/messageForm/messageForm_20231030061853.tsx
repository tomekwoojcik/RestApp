import { FormControl, TextField } from '@mui/material'
import { FC } from 'react'

const MessageForm:FC = () => {
    return (
        <FormControl>

            <TextField label='Message text' variant='filled'/>
        </FormControl>
    )
}

export default MessageForm