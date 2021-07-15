import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from './Context/userContext';
import { DicesProvider } from './Context/dicesContext';
import InitGame from "./Page/ChooseName/InitGame";
import Generala from "./Page/Generala/Generala";

function App() {

  // const { player } = useContext(UserContext);


    return (
      <UserProvider>
        <DicesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={InitGame} />
            <Route exact path="/play" component={Generala} />
          </Switch>
        </BrowserRouter>
        </DicesProvider>
        </UserProvider>
    )
}

export default App;