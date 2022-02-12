import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
    const [fields, setFields] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleClickClear = () => {
        setFields({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    }

    const handleClickRegister = () => {

        if (!fields.email.includes('@')) {
            alert('Почта неверная!')
            return;
        }

        if (fields.firstName.length < 3 || fields.lastName.length < 3) {
            alert('Имя или фамилия указаны неверно!')
            return;
        }

        if (fields.password.length < 6) {
            alert('Пароль должен быть больше 6 символов!')
            return;
        }

        console.log('Зарегистрировались!', fields);
        handleClickClear();
    }

    const handleChangeInput = event => {
        const { name, value } = event.target;
        setFields({
            ...fields, [name]: value
        });
    }

    const isValid = !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.password;


    return (
        <div className="App">
            <div className="row">
                <TextField
                    name="firstName"
                    onChange={handleChangeInput}
                    value={fields.firstName}
                    label="Имя"
                    fullWidth />
                <TextField
                    name="lastName"
                    onChange={handleChangeInput}
                    value={fields.lastName}
                    label="Фамилия"
                    fullWidth />
            </div>
            <div className="row">
                <TextField
                    name="email"
                    onChange={handleChangeInput}
                    value={fields.email}
                    label="E-mail"
                    fullWidth />
                <TextField
                    name="password"
                    onChange={handleChangeInput}
                    value={fields.password}
                    label="Пароль"
                    type="password"
                    fullWidth />
            </div>
            <br />
            <Button
                disabled={!isValid}
                onClick={handleClickRegister} variant="contained"
                color="primary">
                Зарегистрироваться
            </Button>
            <Button
                onClick={handleClickClear}
                variant="contained"
                color="secondary">
                Очистить
            </Button>
        </div >
    );
}

export default App;