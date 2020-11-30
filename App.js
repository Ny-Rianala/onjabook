import React from "react";
import { Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Feed from "./Feed";
import AddPost from "./AddPost";


function App() {
    return (
        <div>
            <h1>helloooo</h1>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route exact path="/addPost">
                    <AddPost />
                </Route>
            </Switch>
        </div>
    )
}

export default App;