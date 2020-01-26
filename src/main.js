
import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Getinput from './getInput';
import Myapp from './App';
import ShowTime from './showTime';
import showTimeForMaster from './showTimeForMaster';

function App() {

    return (
        <div className='app'>
            <Switch>
                <Route exact path="/1" component={Getinput} />
                <Route exact path="/2" component={Myapp} />
                <Route exact path="/3" component={ShowTime} />
                <Route exact path="/4" component={showTimeForMaster} />
                <Route  path="/" component={Getinput} />


            </Switch>

        </div>

    );
}

export default App;