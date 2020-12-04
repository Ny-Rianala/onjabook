import React, { useContext} from "react";
import {Context} from "./Context";
import styled from "styled-components";


const ListStyle = styled.div`
    list-style: none;
    
`
function Feed() {

const {state, dispatch} = useContext(Context);
const {feeds} = state;


let lsFeeds = feeds.map(feed => {
    return (
    <ListStyle key={feed.id}>
        <li>{feed.text}</li>
        <img src={feed.feedUrl} />
    </ListStyle>
    )
})


return (
    <div>
        <h1>Feed</h1>
        <p>{lsFeeds}</p>
    </div>

)

}


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const commentForm = e.currentTarget.add.value;
//     console.log(commentForm);

//     dispatch({type: "ADD_NEW_COMMENT"})
// }


//  let lsFeeds = feeds.map((feed) => {
//      return (
//          <PageStyle key={feed.id}>
//              <p>{feed.text}</p>
//              <div>
//                 <p>{feed.date}</p>
//              </div>
//             <img src={feed.url} alt={feed.name} />
//             <button onClick={addLike} key={feed.id}>{likes}</button>
//             {feed.comments.map((comment) => {
//                 return (
//                 <div className="text" key={comment.userId}>{comment.commentTextContent}</div>
//                 )
//             })}  
//             <form onSubmit={handleSubmit}>
//                 <input name="add" placeholder="Write your comment" />
//                 <button type="submit">Add</button>
//             </form>
//         </PageStyle>
//      )
//  })


   

    // return(
    //     <>
    //         <div>
    //            {/* <div>{lsUsers}</div> */}
    //             <div>{lsFeeds}</div>
               
    //         </div>
    //     </>
    // )
    // }

export default Feed;




