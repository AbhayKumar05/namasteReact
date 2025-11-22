import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../util/userContext";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is Namaste React Live Course Chapter 07 - Finding Path and Links</p>
            <div className="bg-yellow-100">
                <UserContext.Consumer>
                    {({ loggedInUser } ) => <h2 className="font-bold text-xl">Logged in User: {loggedInUser}</h2>} 
                </UserContext.Consumer>
            </div>

            <User />
            <UserClass name={"Abhay Kumar - CLASS"} email={"abhaylagah01@gmail.com"} />
        </div>
    );
}

export default About;