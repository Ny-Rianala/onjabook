import React, { useContext } from "react";
import {Context} from "./Context";
import styled from "styled-components";


const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: row;
    }
`


function Feed() {

 const {feeds} = useContext(Context);


 let lsFeeds = feeds.map((feed) => {
     return (
         <PageStyle key={feed.id}>
             <p>{feed.text}</p>
             <div>
                <p>{feed.name}</p>
                <p>{feed.date}</p>
             </div>
            <img src={feed.url} alt={feed.name} />
            <button>like</button>
            <input placeholder="hadjshad" />
        </PageStyle>
     )
 })

    return(
        <>
            <div>
                {lsFeeds}
            </div>
        </>
    )
    }

export default Feed;




