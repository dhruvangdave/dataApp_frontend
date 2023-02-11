import React from 'react';
import {Link} from "react-router-dom";

const New = () => {
    return (
        <div>
            <h1> This is new component... Your previous page must be unmounted. </h1>
            <Link to="/">
                <button className="btn btn-outline-success" type="submit">Go back</button>
            </Link>
        </div>
    );
};

export default New;