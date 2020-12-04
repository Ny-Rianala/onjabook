import React, { useContext, useState } from 'react';
import {Context} from "./Context";

function Profile() {

    const {state, dispatch} = useContext(Context);
    const {users, currentUser} = state;
    const {username, setUserName} = useState("");
    const {profilePicture, setProfilePicture} = useState("");

    const currentUserObj = users.find(user.userId === currentUser) || {
        userName: "",
        profilePicture: "",
    }

    useEffect(() => {
        setUsername(currentUserObj.userName);
        setProfilePicture(currentUserObj.profilePicture)
    }, [users])


    function handleNewOptions(e) {
        e.preventDefault();
        dispatch ({type: "UPDATE_CURRENT_USER", userName, profilePicture})
    }

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleNewOptions}>
                <input type="text" value={username} onChange={setUserName}/>
                <input type="url" value={profilePicture}  onChange={setProfilePicture}/>
            </form>
        </div>
    )
}

export default Profile
