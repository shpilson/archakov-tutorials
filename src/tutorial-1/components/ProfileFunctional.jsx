function ProfileFunctional(props) {
    const name = props.name.split(" ")[0]
    const date = props.registredAt.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    return (
        <div>
            <p>Привет, <b>{name}!</b></p>
            <p>Дата регистрации: {date}</p>
        </div>
    );
}

export default ProfileFunctional;