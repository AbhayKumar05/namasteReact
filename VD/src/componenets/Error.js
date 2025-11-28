import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Error Page</h1>
            <h2>OOOPPPSSSSS!!! - Page not found!</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
        </div>
    )
}

export default Error;