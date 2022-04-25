import React from 'react'

function App() {
    const [users, setUsers] = React.useState([]);

    const getUsers = () => {
        alert('Запрос данных');
    };

    return (
        <div>
            <ul>
                {users.map((obj) = (
                    <li key={obj.id}>{obj.name}</li>
                ))}
            </ul>
            <button onClick={getUsers}>Получить список пользователей</button>
        </div>
    );
}

export default App;