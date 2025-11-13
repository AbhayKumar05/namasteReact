import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/AbhayKumar05");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }


    render() {

        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
            </div>
        );
    }
}

export default UserClass;
