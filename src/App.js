import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import InfoPage from "./pages/InfoPage";
import TodoPage from "./pages/TodoPage";
import DropdownMenuPage from "./pages/DropdownMenuPage";

function App() {
  return (
    <>
     
            <BrowserRouter>
                 <Switch>
                     <Route  exact path="/" component={HomePage}/>
                     <Route  path="/form" component={FormPage}/>
                     <Route  path="/info" component={InfoPage}/>
                     <Route  path="/todo" component={TodoPage}/>
                     <Route  path="/drop_down_menu" component={DropdownMenuPage}/>
                 </Switch>
            </BrowserRouter>
     
    </>
  );
}

export default App;
