function App(props) {
    let email = '';
    let password = '';

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.length.trim() || !password.length.trim()) {
            alert('Пожалуйста, заполните все поля')
            return
        }
        console.log({ email, password });
    }

    function inputChange(e) {
        const value = e.target.value

        switch (e.target.name) {
            case 'email':
                email = value
                break;
            case 'password':
                password = value
                break;
            default:
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" onChange={inputChange} type="text" placeholder="E-mail" />
            <br />
            <input name="password" onChange={inputChange} type="password" placeholder="Пароль" />
            <br />
            <button>Войти</button>
        </form>
    );
}

export default App;