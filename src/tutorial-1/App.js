import { ProfileFunctional } from './components/ProfileFunctional';

function App() {
    return (
        <>
            <h1>Функциональный компонент</h1>
            <ProfileFunctional name="Вася" registredAt={new Date(2021, 5, 22)} />
        </>
    );
}

export default App;