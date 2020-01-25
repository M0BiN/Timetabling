
import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Getinput from './getInput';
import Myapp from './App';
import ShowTime from './showTime';

function App() {

    return (
        <div className='app'>
            <Switch>
                <Route exact path="/1" component={Getinput} />
                <Route exact path="/2" component={Myapp} />
                <Route exact path="/3" component={ShowTime} />
                <Route  path="/" component={Getinput} />


            </Switch>

        </div>

    );
}

export default App;