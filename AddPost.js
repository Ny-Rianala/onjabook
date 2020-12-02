import React, { useContext } from "react";
import {Context} from "./Context"

function AddPost() {

    const {feeds, setFeeds} = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget.add.value;
        console.log(form);

    let newPost = {
        text:form,
        id: Date.now(),
        url: "",
    }

    feeds.push(newPost);
    console.log(feeds);
    setFeeds()
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
              <textarea
                      placeholder="What is in your mind"
                      name="add"
                  />
                  <input
                      placeholder="url"
                      name="add"
                      type="url"
                  />
                  <button className="submit">Post</button>
          </form> 
       </>
    )
}

export default AddPost;
