import React, { useContext, useState } from "react";
import {Context} from "./Context";
import styled from "styled-components";


const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: row;
        align-items: space-between;
        gap: 2rem;
    }
    .profile {
        border-radius: 50%;
        width: 20%;
    }
    button {
            padding-top: 5px;
            padding-left: 5px;
            padding-bottom: 5px;
            padding-right: 5px;
            background: pink;
            border: none;
            width: 30%;
            height: 135%;
            cursor: pointer;
            margin-top: 1rem;
            margin-bottom: 1rem;
    }
    button:hover {
        background: hotpink;
    }
`

function Feed() {

const {feeds, users, setFeeds} = useContext(Context);
const [likes, setLikes] = useState(0);


let lsUsers = users.some((user) => {
    return(
        <div>
            <p>{user.userName}</p>
        </div>
    )
}) 


const addLike = () => {
    setLikes(prevCount => prevCount + 1)
}


const handleSubmit = (e) => {
    e.preventDefault();
    const commentForm = e.currentTarget.add.value;
    console.log(commentForm);


let comment = {
    commentTextContent: commentForm,
    id: Date.now(),
    url: "",
}

feeds.push(comment);
console.log(feeds);
setFeeds();

}


 let lsFeeds = feeds.map((feed) => {
     return (
         <PageStyle key={feed.id}>
             <p>{feed.text}</p>
             <div>
                <p>{feed.date}</p>
             </div>
            <img src={feed.url} alt={feed.name} />
                <button onClick={addLike} key={feed.id}>{likes}</button>
            <form onSubmit={handleSubmit}>
                <input name="add" placeholder="Write your comment" />
                <button type="submit">Add</button>
            </form>
        </PageStyle>
     )
 })

    return(
        <>
            <div>
               {/* <div>{lsUsers}</div> */}
               <div>{lsFeeds}</div>
            </div>
        </>
    )
    }

export default Feed;




