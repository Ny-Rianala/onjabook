import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Headings = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    a {
        text-decoration: none;
        list-style: none;
        color: bluesky;
        font-size: 18px;
    }
`

function Header()  {
    return (
        <div>
            <Headings>
                <Link to="/">
                        <li>Feed</li>
                </Link>
                <Link to="/addPost">
                        <li>Add a Post</li>
                </Link>
                <Link to="/userName">
                        <li>Username</li>
                </Link>
            </Headings>
        </div>
    )
}



export default Header;