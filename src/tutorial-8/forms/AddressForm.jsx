import React from 'react'
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import '../index.scss';

const schema = yup.object().shape({
    city: yup.string().required('Укажите город'),
    street: yup.string().required('Укажите улицу'),
    appartment: yup.number().required('Укажите номер квартиры'),
});

const AddressForm = ({ nextStep, setFormValues }) => {
    const { handleSubmit, register, formState, reset } = useForm({
        defaultValues: {
            city: '',
            street: '',
            appartment: 0,
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (values) => {
        setFormValues((prev) => {
            return { ...prev, ...values };
        });
        nextStep('result');
    };


    return (
        <div>
            <TextField
                name='city'
                label='Город'
                {...register('city')}
                helperText={formState.errors.city && formState.errors.city.message}
                error={!!formState.errors.city}
                fullWidth
            />
            <TextField
                name='street'
                label='Улица'
                {...register('street')}
                helperText={formState.errors.street && formState.errors.street.message}
                error={!!formState.errors.street}
                fullWidth
            />
            <TextField
                name='apartment'
                label='Номер квартиры'
                {...register('apartment')}
                helperText={formState.errors.apartment && formState.errors.apartment.message}
                error={!!formState.errors.apartment}
                type="number"
                fullWidth
            />

            <br />
            <br />
            <div className='row buttons'>
                <Button variant='contained' color="error" onClick={() => reset()}>
                    Очистить
					</Button>
                <Button onClick={handleSubmit(onSubmit)} type='sumbit' variant='contained' color="success">
                    Далее
					</Button>
            </div>
        </div>
    )
}


export default AddressForm;