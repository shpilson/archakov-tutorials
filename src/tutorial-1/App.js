import ProfileFunctional from './components/ProfileFunctional';
import ProfileClass from './components/ProfileClass';

function App() {
    return (
        <>
            <h1>Функциональный компонент</h1>
            <ProfileFunctional name="Вася" registredAt={new Date(2021, 5, 22)} />

            <h1>Классовый компонент</h1>
            <ProfileClass name="Вася" registredAt={new Date(2021, 5, 22)} />
        </>
    );
}

export default App;