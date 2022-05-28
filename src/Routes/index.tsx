import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { Route } from "./Route";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default Routes;
