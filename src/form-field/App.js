import React from 'react';
import Button from '@mui/material/Button';

import { useForm, FormProvider } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


import PersonalInfoForm from './forms/PersonalInfoForm';

const schema = yup.object().shape({
    firstName: yup.string().min(2, 'Слишком короткое имя'),
    lastName: yup.string().min(3, 'Слишком короткая фамилия'),
    email: yup.string().email('Неверная почта').required('Укажите почту'),
});

const App = () => {
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="App">
            <FormProvider {...methods} >
                <PersonalInfoForm />
            </FormProvider>
            <Button onClick={methods.handleSubmit(onSubmit)} variant='contained' color="error">
                Далее
			</Button>
        </div>
    )
}

export default App;