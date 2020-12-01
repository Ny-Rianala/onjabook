import React from "react";

function AddPost() {


    return(
        <>
            <form>
              <textarea
                      required
                      placeholder="What is in your mind"
                  />
                  <input
                      placeholder="Title"
                  />
                  <button>Post</button>
          </form> 
       </>
    )
}

export default AddPost;


//    onChange={e => setTitle(e.currentTarget.value)}