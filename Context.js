import React, { useReducer } from "react";
const  Context = React.createContext();
import feedData from "./feedData.json"
import userData from "./userData.json";

function ContextProvider({children}) {
   
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "ADD_NEW_FEED": {
                    return {
                        ...state,
                        feeds: [...state.feeds, action.newFeed]
                    }
                }
                case "UPDATE_CURRENT_USER": {
                    const newUserArr = state.users.map(user => {
						if (user.userId === state.currentUser) {
							//Update the user
						}
						return user;
					})
					return {
						...state,
						newUserArr
					}
                }

                default: {
                    console.error("No actions define", action.type);
                    break;

                }
            }
            return state;
        },
        {
            feeds: feedData,
            users: userData,
            currentUser: 1,
        }
    );
        return <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    }
    
export {ContextProvider, Context}


