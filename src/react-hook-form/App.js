import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
    const { handleSubmit, register, formState } = useForm();

    const onSubmit = (values) => console.log('ФОРМА', values);

    console.log(formState.errors);

    return (
        <div className="App">
            <div className="row">
                <TextField
                    name="firstName"
                    label="Имя"
                    {...register("firstName", {
                        required: 'Это обязательное поле!'
                    })}
                    helperText={formState.errors.firstName && formState.errors.firstName.message}
                    error={!!formState.errors.firstName}
                    fullWidth />
                <TextField
                    name="lastName"
                    label="Фамилия"
                    {...register("lastName", {
                        required: 'Это обязательное поле!'
                    })}
                    helperText={formState.errors.lastName && formState.errors.lastName.message}
                    error={!!formState.errors.lastName}
                    fullWidth />
            </div>
            <div className="row">
                <TextField
                    name="email"
                    label="E-mail"
                    {...register("email", {
                        required: 'Это обязательное поле!',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Это неверная почта!"
                        }
                    })}
                    helperText={formState.errors.email && formState.errors.email.message}
                    error={!!formState.errors.email}
                    fullWidth />
                <TextField
                    name="password"
                    label="Пароль"
                    type="password"
                    {...register("password", {
                        required: 'Это обязательное поле!'
                    })}
                    helperText={formState.errors.password && formState.errors.password.message}
                    error={!!formState.errors.password}
                    fullWidth />
            </div>
            <br />
            <div className="row">
                <TextField
                    name="about"
                    label="Обо мне"
                    fullWidth />
            </div>
            <br />
            <Button
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                color="primary">
                Зарегистрироваться
            </Button>
            <Button
                variant="contained"
                color="secondary">
                Очистить
            </Button>
        </div >
    );
}

export default App;