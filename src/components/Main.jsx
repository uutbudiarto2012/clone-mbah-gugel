import {
  Redirect, Route, Switch
} from "react-router-dom";
import { Results } from "./Results";
export const Main = () => {
  return (
    <div className="p-4 pb-28">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={['/search','/images','/videos','/news']} >
          <Results />
        </Route>
      </Switch>
    </div>
  )
}
