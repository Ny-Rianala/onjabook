import React, { useContext, useState } from "react";
import {Context} from "./Context"

function AddPost() {
     
    const [feedText, setFeedText] = useState("");
	const [feedPicture, setFeedPicture] = useState("");
    const { state, dispatch} = useContext(Context); 
    const {currentUser} = state;

    function handleSubmit(e) {
		e.preventDefault();
		console.log("here is your new post");
		const newFeed = {
			id: Date.now(),
			date: new Date(),
			text: feedText,
			userId: currentUser,
			feedUrl: feedPicture,
			likes:[],
			comments:[],
		}
		console.log({newFeed});
		dispatch({type: "ADD_NEW_FEED", newFeed: newFeed})
		resetForm();
	};

    function resetForm() {
		setFeedText("");
		setFeedPicture("");
	}

    return (
		<div>
			<h2>Add a post</h2>
			<form onSubmit={handleSubmit}>
				<textarea
					placeholder="What is in your mind"
					value={feedText}
					onChange={e => setFeedText(e.target.value)}  
				/>
				<input
					type="text"
					placeholder="Paste a picture url"
					value={feedPicture}
					onChange={e=> setFeedPicture(e.target.value)}
				 />
				 <button>post</button>
			</form>
		</div>
	);
}

export default AddPost;



//Add post