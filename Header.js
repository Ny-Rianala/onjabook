import React from "react";
import { Link } from 'react-router-dom';

function Header()  {
    return (
        <div>
            <Link to="/">
                    <li>Feed</li>
            </Link>
            <Link to="/addPost">
                    <li>Add a Post</li>
            </Link>
        </div>
    )
}



export default Header;