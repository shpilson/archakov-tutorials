import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import PersonalInfoForm from './forms/PersonalInfoForm';
import AddressForm from './forms/AddressForm';
import Result from './forms/Result'

function App() {
    const [formValues, setFormValues] = React.useState({})
    const history = useHistory();

    const nextStep = (name) => {
        history.push(name);
    }

    console.log('главная форма', formValues);

    return (
        <div className='App'>
            <Route path="/" render={() => <PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues} />} exact />
            <Route path="/address" render={() => <AddressForm nextStep={nextStep} setFormValues={setFormValues} />} />
            <Route path="/result" render={() => <Result formValues={formValues} />} />
        </div>
    );
}

export default App;