import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import { MouseEventHandler, useState } from 'react';
import React from 'react'

interface todoInputProp {
    label: string,
    onClick: (value: string) => void
}

const TodoInput = ({ label , onClick }: todoInputProp) => {
    const [inputVal, setInputVal] = useState<string>("");
    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputVal(e.target.value);
    }
    const handleSubmit : React.MouseEventHandler<HTMLButtonElement> = () => {
        onClick(inputVal);
        setInputVal('');
    }
    return (
        <div>
            <Box>
                <TextField value={  inputVal } onChange={handleChange} label={ label }  variant="outlined"/>
            </Box>
            <Box>
                <Button variant='contained' color='primary' onClick={handleSubmit}>Click me</Button>
            </Box>
        </div>
    )
}
export {TodoInput}