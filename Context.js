import React, { Children, useEffect, useState } from "react";
import feedData from "./feedData.json";
const  Context = React.createContext();
import userData from "./userData.json";

function ContextProvider({children}) {
    const [feeds, setFeeds] = useState(feedData);
    const [users, setUsers] = useState(userData);

    console.log(feeds);
    
    useEffect(() => {
        setFeeds(feedData);
    }, [])


    // useEffect(() => {
    //     setLikes()
    // })

    useEffect(() => {
       setUsers(userData)
    }, [])

    return (
        <Context.Provider value={{feeds, users}}>
            {children}
        </Context.Provider>
    )
    }

export {ContextProvider, Context}


