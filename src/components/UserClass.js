import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            error: null,
            avatar_url: "http://dummy-photo.com", // default avatar
        };
    }

    async componentDidMount() {
        this.timer=setInterval(()=>{
            console.log("namaste react");
        },1000);
        try {
            const response = await fetch("https://api.github.com/users/DanthuluriSatya");
            const json = await response.json();
            this.setState({
                userInfo: json,
            });
        } catch (error) {
            this.setState({
                error: error.message,
            });
            console.error("Error fetching the username:", error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Example: Log when userInfo updates
        if (prevState.userInfo !== this.state.userInfo) {
            console.log("User info updated:", this.state.userInfo);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        // Example: Clean up any timers or listeners
        console.log("Component is being unmounted");
    }

    render() {
        const { userInfo, error } = this.state;

        if (!userInfo) {
            return <div>Loading...</div>;
        }

        const { name, location, avatar_url } = userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @indudanthuluri24@gmail.com</h4>
                {error && <p>Error: {error}</p>}
            </div>
        );
    }
}

export default UserClass;
