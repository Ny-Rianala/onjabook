import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from "./Context";

const Headings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;   
    a {
        text-decoration: none;
        list-style: none;
        color: tomato;
        font-size: 18px;
    }
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
                <li>
                    <Link  to="/">Feed</Link>
                </li>
                <li>
                    <Link to="/addPost">Add a Post</Link>
                </li>
                <li className=" LinkStyle">
                {currentUserObj && (
                    <Link to="/profile">
                        <span>{currentUserObj.userName}</span>
						<img
						src={currentUserObj.profilePicture}
						alt={`Profile pic of ${currentUserObj.userName}`}
					/></Link>)}
                </li>
            </Headings>
        </div>
    )
}



export default Header;