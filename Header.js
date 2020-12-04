import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from "./Context";

const Headings = styled.div`
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;  
    a {
        font-size: 24px;
        color: rgb(24, 128, 160);
        text-decoration: none;
    }
    a:hover {
        color: rgb(56, 118, 233);
    }
}
`
const ProfileStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 15px;
    padding: 0;
    margin: 0;
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
`


function Header()  {
	const {state} = useContext(Context);
    const {users, currentUser} = state;
    console.log(state);
    const currentUserObj = users.find(user => user.userId == currentUser);
    
    console.log(currentUserObj);

    return (
        <div>
            <Headings>
                <ul>
                    <li>
                        <Link  to="/">Feed</Link>
                    </li>
                    <li>
                        <Link to="/addPost">Add a Post</Link>
                    </li>
                    <li>
                    {currentUserObj && (
                        <Link to="/userName">
                            <ProfileStyles>
                                <span>{currentUserObj.userName}</span>
                                <img
                                src={currentUserObj.profilePicture}
                                alt={`Profile pic of ${currentUserObj.userName}`}
                                />
                            </ProfileStyles>
                        </Link>
                    )}
                    </li>
                </ul>
            </Headings>
        </div>
    )
}



export default Header;