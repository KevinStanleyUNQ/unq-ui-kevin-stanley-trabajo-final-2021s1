import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from './Context/userContext';
import InitGame from "./Page/ChooseName/InitGame";
import Generala from "./Page/Generala/Generala";

function App() {

    return (
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={InitGame} />
            <Route exact path="/play" component={Generala} />
          </Switch>
        </BrowserRouter>
        </UserProvider>
    )
}

export default App;