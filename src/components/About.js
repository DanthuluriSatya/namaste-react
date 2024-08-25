import React, { Component } from 'react';
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"First"} location={"Dehradun Class"} />
                {/* <UserClass name={"Second"} location={"US"} /> */}
                {/* <UserClass name={"Third"} location={"US"} /> */}
            </div>
        );
    }
}

export default About;
