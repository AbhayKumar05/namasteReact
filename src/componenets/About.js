import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is Namaste React Live Course Chapter 07 - Finding Path and Links</p>
            <User />
            <UserClass name={"Abhay Kumar - CLASS"} email={"abhaylagah01@gmail.com"} />
        </div>
    );
}

export default About;