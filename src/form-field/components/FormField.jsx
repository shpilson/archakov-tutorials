import React from 'react'
import { useFormContext } from "react-hook-form";
import TextField from '@mui/material/TextField';

export const FormField = ({ name, label }) => {
    const { register, formState } = useFormContext();
    const { errors } = formState;

    return (
        <TextField {...register(name)}
            helperText={errors[name] && errors[name].message}
            error={!!errors[name]}
            name={name}
            label={label}
            fullWidth />
    )
}
