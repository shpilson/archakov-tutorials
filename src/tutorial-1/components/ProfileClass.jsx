import React from 'react';

class ProfileClass extends React.Component {
    name = this.props.name.split(" ")[0]
    date = this.props.registredAt.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    render() {
        return (
            <div>
                <p>Привет, <b>{this.name}!</b></p>
                <p>Дата регистрации: {this.date}</p>
            </div>
        )
    }
}

export default ProfileClass;