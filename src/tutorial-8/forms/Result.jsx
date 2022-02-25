import React from 'react';
import { Paper } from '@mui/material';

const Result = ({ formValues }) => {
    return (
        <div>
            <Paper style={{ padding: 30 }}>
                <h2>Персональная информация:</h2>
                <ul>
                    <li>
                        <b>Имя: </b> {formValues.firstName}
                    </li>
                    <li>
                        <b>Фамилия: </b> {formValues.lastName}
                    </li>
                    <li>
                        <b>Почта: </b> {formValues.email}
                    </li>
                    <li>
                        <b>Пароль: </b> {formValues.password}
                    </li>
                </ul>

                <hr />
                <h2>Адрес:</h2>
                <ul>
                    <li>
                        <b>Город: </b> {formValues.city}
                    </li>
                    <li>
                        <b>Улица: </b> {formValues.street}
                    </li>
                    <li>
                        <b>Квартира: </b> {formValues.appartment}
                    </li>
                </ul>
            </Paper>
        </div>
    )
}

export default Result;
