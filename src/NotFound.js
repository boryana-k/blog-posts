import './not-found.css'
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()

    const handeClick = () => {
        navigate('/')
    }
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <button onClick={handeClick}>Back to the homepage</button>
        </div>
    );
}

export default NotFound;