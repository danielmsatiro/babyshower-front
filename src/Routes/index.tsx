import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Profile } from "../Pages/Profile";
import { Route } from "./Route";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} isPrivate />
      </Switch>
    </div>
  );
}

export default Routes;
