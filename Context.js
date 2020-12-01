import React, { Children, useEffect, useState } from "react";
import feedData from "./feedData.json";
const  Context = React.createContext();

function ContextProvider({children}) {
    const [feeds, setFeeds] = useState(feedData);

    console.log(feeds);
    
    useEffect(() => {
        setFeeds(feedData);
    }, [])

    return (
        <Context.Provider value={{feeds}}>
            {children}
        </Context.Provider>
    )
    }

export {ContextProvider, Context}


