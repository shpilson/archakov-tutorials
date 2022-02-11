import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    const handleClickRegister = () => {
        const form = {
            firstName,
            lastName,
            email,
            password
        };

        console.log(form);
        handleClickClear();
    }

    return (
        <div className="App">
            <div className="row">
                <TextField
                    onChange={(event) => setFirstName(event.target.value)}
                    value={firstName}
                    label="Имя"
                    fullWidth />
                <TextField
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                    label="Фамилия"
                    fullWidth />
            </div>
            <div className="row">
                <TextField
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    label="E-mail"
                    fullWidth />
                <TextField
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    label="Пароль"
                    type="password"
                    fullWidth />
            </div>
            <br />
            <Button onClick={handleClickRegister} variant="contained" color="primary">
                Зарегистрироваться
            </Button>
            <Button onClick={handleClickClear} variant="contained" color="secondary">
                Очистить
            </Button>
        </div >
    );
}

export default App;