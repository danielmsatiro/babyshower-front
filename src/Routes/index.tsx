import {Switch, Route} from "react-router-dom" 
import Home from "../Pages/Home";

function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;